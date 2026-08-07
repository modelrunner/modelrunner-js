import { getRestApiUrl, RequiredConfig } from "./config";
import { dispatchRequest } from "./request";
import { ValidationError } from "./response";
import {
  ValidationErrorInfo,
  WebhookEventName,
  WebhookPayload,
  WebhookSecret,
} from "./types/common";

/** The lifecycle events a request can notify a webhook about. */
export const WEBHOOK_EVENTS: readonly WebhookEventName[] = [
  "start",
  "completed",
];

/** Longest webhook URL the API accepts. */
export const WEBHOOK_URL_MAX_LENGTH = 2048;

/**
 * Standard Webhooks headers (https://www.standardwebhooks.com), lowercase per
 * the spec.
 */
export const WEBHOOK_ID_HEADER = "webhook-id";
export const WEBHOOK_TIMESTAMP_HEADER = "webhook-timestamp";
export const WEBHOOK_SIGNATURE_HEADER = "webhook-signature";

/**
 * How far the `webhook-timestamp` may be from now before the delivery is
 * rejected as a replay. The API recomputes the timestamp on every attempt, so a
 * legitimate retry two hours later still arrives inside the window.
 */
export const DEFAULT_TOLERANCE_SECONDS = 300;

const SECRET_PREFIX = "whsec_";
const SIGNATURE_PREFIX = "v1,";

// ============== SUBMIT-SIDE ==============

function invalidWebhook(detail: ValidationErrorInfo[]): ValidationError {
  return new ValidationError({
    message: "Invalid webhook",
    status: 400,
    body: { detail },
  });
}

/**
 * Validates the webhook options against the rules the API enforces.
 *
 * Deliberately does **not** check the URL scheme. `https:` is the rule on a
 * normal deployment, but the API relaxes it under `WEBHOOK_ALLOW_INSECURE_URLS`
 * so a developer can point a request at a local receiver — refusing `http:`
 * here would make that impossible through the client while raw HTTP still
 * worked. Scheme and SSRF rules stay server-side, where they can also be
 * re-checked against the resolved address at delivery time.
 *
 * @param options the webhook url and event filter to validate.
 * @throws {ValidationError} if any limit is violated. The error mirrors the one
 * the API returns, so client-side and server-side violations can be inspected
 * the same way. Since no request was made, its `requestId` is empty.
 */
export function validateWebhookOptions({
  webhookUrl,
  webhookEvents,
}: {
  webhookUrl: string;
  webhookEvents?: WebhookEventName[];
}): void {
  const issues: ValidationErrorInfo[] = [];

  if (typeof webhookUrl !== "string") {
    issues.push({
      loc: ["webhook"],
      msg: "webhook must be a string",
      type: "invalid_type",
    });
  } else {
    if (webhookUrl.length > WEBHOOK_URL_MAX_LENGTH) {
      issues.push({
        loc: ["webhook"],
        msg: `webhook must be at most ${WEBHOOK_URL_MAX_LENGTH} characters`,
        type: "too_big",
      });
    }
    try {
      new URL(webhookUrl);
    } catch (_) {
      issues.push({
        loc: ["webhook"],
        msg: "webhook must be a valid url",
        type: "invalid_string",
      });
    }
  }

  if (webhookEvents !== undefined) {
    if (!Array.isArray(webhookEvents)) {
      issues.push({
        loc: ["webhook_events_filter"],
        msg: "webhook_events_filter must be an array",
        type: "invalid_type",
      });
    } else if (webhookEvents.length === 0) {
      issues.push({
        loc: ["webhook_events_filter"],
        msg: "webhook_events_filter must contain at least one event",
        type: "too_small",
      });
    } else {
      for (const event of webhookEvents) {
        if (!WEBHOOK_EVENTS.includes(event)) {
          issues.push({
            loc: ["webhook_events_filter", event],
            msg: `webhook_events_filter must only contain ${WEBHOOK_EVENTS.join(
              " or ",
            )}`,
            type: "invalid_enum_value",
          });
        }
      }
    }
  }

  if (issues.length > 0) {
    throw invalidWebhook(issues);
  }
}

type ApplyWebhookOptions = {
  webhookUrl?: string;
  webhookEvents?: WebhookEventName[];
  method?: string;
};

/**
 * Merges the webhook configuration into the request body as siblings of the
 * model input fields, which is how the API expects to receive it. Call this
 * with the input already transformed by the storage client, so the webhook url
 * is never mistaken for a file to upload.
 *
 * `webhook_events_filter` is omitted entirely when no events are given, so the
 * API applies its own default of `["completed"]`.
 *
 * @param input the model input, i.e. the request body so far.
 * @param options the webhook to attach and the HTTP method of the request.
 * @returns the body to send, or `input` untouched when there is no webhook.
 * @throws {Error} if a webhook is set on a `get` request, which carries no body.
 * @throws {ValidationError} if the webhook violates the API limits, or if an
 * event filter was given without a url — the API rejects that combination.
 */
export function applyWebhook<Input>(
  input: Input | undefined,
  { webhookUrl, webhookEvents, method }: ApplyWebhookOptions,
): Input | undefined {
  if (webhookUrl === undefined) {
    if (webhookEvents !== undefined) {
      throw invalidWebhook([
        {
          loc: ["webhook_events_filter"],
          msg: "webhookEvents requires a webhookUrl",
          type: "missing",
        },
      ]);
    }
    return input;
  }
  if ((method ?? "post").toLowerCase() === "get") {
    throw new Error(
      "The webhookUrl option is not supported on get requests, as they carry no body.",
    );
  }
  validateWebhookOptions({ webhookUrl, webhookEvents });
  const events = webhookEvents ? Array.from(new Set(webhookEvents)) : undefined;
  return Object.assign(
    {},
    input,
    { webhook: webhookUrl },
    events ? { webhook_events_filter: events } : {},
  ) as Input;
}

// ============== RECEIVE-SIDE ==============

/**
 * Thrown when a delivery cannot be attributed to the account's signing secret,
 * for any reason: a missing or malformed header, a timestamp outside the
 * tolerance window, or a signature that does not match.
 *
 * Treat every instance the same way — respond `401` and do not process the
 * body. Never branch on the message.
 */
export class WebhookVerificationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "WebhookVerificationError";
  }
}

/**
 * Header bag accepted by {@link verifyWebhook}: a fetch `Headers`, Node's
 * `IncomingHttpHeaders`, or any plain object.
 */
export type WebhookHeaders =
  | Headers
  | Record<string, string | string[] | undefined>;

export type VerifyWebhookOptions = {
  /** The `whsec_…` signing secret, from `webhooks.getSecret()`. */
  secret?: string;

  /**
   * Several secrets to try, for a receiver rolling from one to the next. The
   * delivery is accepted when it matches any of them.
   */
  secrets?: string[];

  /** The delivery's headers. */
  headers: WebhookHeaders;

  /**
   * The **raw** request body, exactly as received.
   *
   * The signature covers the delivered bytes, so a body that has been parsed
   * and re-serialized will not verify — `JSON.stringify(JSON.parse(body))` is
   * not byte-stable. Read it before any JSON body parser runs.
   */
  body: string | Uint8Array;

  /**
   * How many seconds the `webhook-timestamp` may differ from now.
   * Defaults to {@link DEFAULT_TOLERANCE_SECONDS}.
   */
  toleranceSeconds?: number;
};

function resolveSubtle(): SubtleCrypto {
  const webcrypto = (globalThis as { crypto?: Crypto }).crypto;
  if (!webcrypto?.subtle) {
    throw new WebhookVerificationError(
      "Your environment does not support the Web Crypto API, which is required to verify webhooks.",
    );
  }
  return webcrypto.subtle;
}

function readHeader(headers: WebhookHeaders, name: string): string {
  let value: string | string[] | undefined | null;
  const maybeFetchHeaders = headers as Headers;
  if (typeof maybeFetchHeaders?.get === "function") {
    value = maybeFetchHeaders.get(name);
  } else {
    const record = headers as Record<string, string | string[] | undefined>;
    value = record[name];
    if (value === undefined) {
      const match = Object.keys(record ?? {}).find(
        (key) => key.toLowerCase() === name,
      );
      value = match !== undefined ? record[match] : undefined;
    }
  }
  if (Array.isArray(value)) {
    // A repeated signature header is ambiguous, and guessing which copy to
    // trust is exactly the kind of decision that turns into a bypass.
    throw new WebhookVerificationError(
      `The ${name} header was sent more than once.`,
    );
  }
  if (value === undefined || value === null || value === "") {
    throw new WebhookVerificationError(`Missing the ${name} header.`);
  }
  return value;
}

/**
 * Newer TypeScript libs model `Uint8Array` as backed by `ArrayBufferLike`, which
 * is not assignable to `BufferSource` even though every array built here is
 * plainly `ArrayBuffer`-backed. Narrowing with a type parameter would break the
 * older TypeScript this package still compiles under, so the cast is the
 * portable option.
 */
function asBufferSource(bytes: Uint8Array): BufferSource {
  return bytes as unknown as BufferSource;
}

/**
 * `atob` rather than `Buffer.from(..., "base64")`: this package runs in
 * browsers, Cloudflare Workers and Node alike, and `Buffer` exists only in the
 * last of those. Node marks the global as deprecated; ignore that here.
 *
 * Throws on malformed input, which every caller must treat as a non-match
 * rather than letting it escape.
 */
function base64ToBytes(value: string): Uint8Array {
  const binary = atob(value);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

function toBytes(value: string | Uint8Array): Uint8Array {
  return typeof value === "string" ? new TextEncoder().encode(value) : value;
}

/**
 * The signed content is `${id}.${timestamp}.${body}`. Built as bytes rather
 * than as a string so a body that is not valid UTF-8 still hashes to what the
 * sender hashed.
 */
function buildSignedContent(
  id: string,
  timestamp: string,
  body: string | Uint8Array,
): Uint8Array {
  const prefix = new TextEncoder().encode(`${id}.${timestamp}.`);
  const payload = toBytes(body);
  const signedContent = new Uint8Array(prefix.length + payload.length);
  signedContent.set(prefix, 0);
  signedContent.set(payload, prefix.length);
  return signedContent;
}

async function importSecret(
  subtle: SubtleCrypto,
  secret: string,
): Promise<CryptoKey> {
  const base64 = secret.startsWith(SECRET_PREFIX)
    ? secret.slice(SECRET_PREFIX.length)
    : secret;
  let raw: Uint8Array;
  try {
    raw = base64ToBytes(base64);
  } catch (_) {
    throw new WebhookVerificationError(
      "The signing secret is not valid base64.",
    );
  }
  return subtle.importKey(
    "raw",
    asBufferSource(raw),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["verify"],
  );
}

/**
 * Verifies a webhook delivery and returns its parsed payload.
 *
 * Implements Standard Webhooks (https://www.standardwebhooks.com): HMAC-SHA256
 * over `${webhook-id}.${webhook-timestamp}.${body}`, compared against the
 * space-delimited list in `webhook-signature`. The list carries more than one
 * signature while a secret is being rotated, and matching **any** entry is
 * correct — that is what gives you a 24-hour window to deploy a rotated secret.
 *
 * Comparison is delegated to `crypto.subtle.verify`, so it is constant-time.
 *
 * ```ts
 * // express, with the raw body preserved
 * app.post(
 *   "/webhooks/modelrunner",
 *   express.raw({ type: "application/json" }),
 *   async (req, res) => {
 *     try {
 *       const payload = await modelrunner.webhooks.verify({
 *         secret: process.env.MODELRUNNER_WEBHOOK_SECRET,
 *         headers: req.headers,
 *         body: req.body,
 *       });
 *       // respond before doing the work: retries are keyed off a non-2xx
 *       res.sendStatus(200);
 *       await handle(payload);
 *     } catch (error) {
 *       res.sendStatus(401);
 *     }
 *   },
 * );
 * ```
 *
 * @param options the secret(s), the delivery headers and the raw body.
 * @returns the delivered payload.
 * @throws {WebhookVerificationError} if the delivery cannot be verified.
 */
export async function verifyWebhook<Output = any, Input = any>({
  secret,
  secrets,
  headers,
  body,
  toleranceSeconds = DEFAULT_TOLERANCE_SECONDS,
}: VerifyWebhookOptions): Promise<WebhookPayload<Output, Input>> {
  const candidates = [...(secrets ?? []), ...(secret ? [secret] : [])];
  if (candidates.length === 0) {
    throw new WebhookVerificationError(
      "A signing secret is required to verify a webhook.",
    );
  }

  const id = readHeader(headers, WEBHOOK_ID_HEADER);
  const timestamp = readHeader(headers, WEBHOOK_TIMESTAMP_HEADER);
  const signatureHeader = readHeader(headers, WEBHOOK_SIGNATURE_HEADER);

  const timestampSeconds = Number(timestamp);
  if (!Number.isFinite(timestampSeconds)) {
    throw new WebhookVerificationError(
      "The webhook-timestamp header is not a number.",
    );
  }
  const skew = Math.abs(Date.now() / 1000 - timestampSeconds);
  if (skew > toleranceSeconds) {
    throw new WebhookVerificationError(
      `The webhook-timestamp header is outside the ${toleranceSeconds}s tolerance window.`,
    );
  }

  // Every entry is attacker-supplied, so a malformed one is a non-match rather
  // than an error: it must not be able to short-circuit the valid entry
  // alongside it.
  const signatures: Uint8Array[] = [];
  for (const entry of signatureHeader.split(" ")) {
    if (!entry.startsWith(SIGNATURE_PREFIX)) {
      continue;
    }
    try {
      signatures.push(base64ToBytes(entry.slice(SIGNATURE_PREFIX.length)));
    } catch (_) {
      /* not valid base64 — cannot match anything */
    }
  }
  if (signatures.length === 0) {
    throw new WebhookVerificationError(
      "The webhook-signature header carries no v1 signature.",
    );
  }

  const subtle = resolveSubtle();
  const signedContent = buildSignedContent(id, timestamp, body);

  let verified = false;
  for (const candidate of candidates) {
    const key = await importSecret(subtle, candidate);
    for (const signature of signatures) {
      if (
        await subtle.verify(
          "HMAC",
          key,
          asBufferSource(signature),
          asBufferSource(signedContent),
        )
      ) {
        verified = true;
        break;
      }
    }
    if (verified) {
      break;
    }
  }
  if (!verified) {
    throw new WebhookVerificationError(
      "No signature in the webhook-signature header matches the signing secret.",
    );
  }

  const raw = typeof body === "string" ? body : new TextDecoder().decode(body);
  try {
    return JSON.parse(raw) as WebhookPayload<Output, Input>;
  } catch (_) {
    throw new WebhookVerificationError(
      "The webhook body is not valid JSON, despite a valid signature.",
    );
  }
}

// ============== CLIENT ==============

export type WebhookSecretOptions = {
  /** The signal to abort the request. */
  abortSignal?: AbortSignal;
};

/**
 * Account-level webhook operations: reading and rotating the signing secret,
 * and verifying deliveries.
 */
export interface WebhooksClient {
  /**
   * Retrieves the account's webhook signing secret, creating it on first call.
   *
   * The same secret is returned on every call until it is rotated, so fetch it
   * once and keep it in your receiver's environment rather than calling this on
   * each delivery. Never expose it to a browser.
   *
   * @returns a promise that resolves to the `whsec_…` secret.
   */
  getSecret(options?: WebhookSecretOptions): Promise<WebhookSecret>;

  /**
   * Rotates the account's signing secret and returns the new one.
   *
   * The previous secret keeps being signed with alongside the new one for 24
   * hours, so deployments have a window to pick the new value up. Rotating
   * twice inside that window ends the window early and breaks receivers still
   * holding the original secret.
   *
   * @returns a promise that resolves to the new `whsec_…` secret.
   */
  rotateSecret(options?: WebhookSecretOptions): Promise<WebhookSecret>;

  /**
   * Verifies a delivery and returns its payload.
   * @see verifyWebhook
   */
  verify<Output = any, Input = any>(
    options: VerifyWebhookOptions,
  ): Promise<WebhookPayload<Output, Input>>;
}

type WebhooksClientDependencies = {
  config: RequiredConfig;
};

export const createWebhooksClient = ({
  config,
}: WebhooksClientDependencies): WebhooksClient => {
  const secretUrl = `${getRestApiUrl()}/webhooks/default/secret`;
  return {
    async getSecret({ abortSignal }: WebhookSecretOptions = {}) {
      return dispatchRequest<unknown, WebhookSecret>({
        method: "get",
        targetUrl: secretUrl,
        config,
        options: { signal: abortSignal },
      });
    },

    async rotateSecret({ abortSignal }: WebhookSecretOptions = {}) {
      return dispatchRequest<unknown, WebhookSecret>({
        method: "post",
        targetUrl: `${secretUrl}/rotate`,
        config,
        options: {
          signal: abortSignal,
          // Never retried. Rotation is monotonic and only the immediately
          // previous secret stays valid, so a retry after the server already
          // committed would skip a version and cut off receivers still holding
          // the secret this call was meant to replace.
          retry: { maxRetries: 0, baseDelay: 0, maxDelay: 0 },
        },
      });
    },

    verify: verifyWebhook,
  };
};
