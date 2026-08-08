import { StorageSettings } from "../storage";

/**
 * Represents an API result, containing the data,
 *  the request ID and any other relevant information.
 */
export type Result<T> = {
  data: T;
  requestId: string;
};

/**
 * A flat map of user-defined tags attached to a request.
 *
 * @see RunOptions.metadata
 */
export type RequestMetadata = Record<string, string>;

/**
 * The function input and other configuration when running
 * the function, such as the HTTP method to use.
 */
export type RunOptions<Input> = {
  /**
   * The function input. It will be submitted either as query params
   * or the body payload, depending on the `method`.
   */
  readonly input?: Input;

  /**
   * The HTTP method, defaults to `post`;
   */
  readonly method?: "get" | "post" | "put" | "delete" | string;

  /**
   * The abort signal to cancel the request.
   */
  readonly abortSignal?: AbortSignal;

  /**
   * Object lifecycle configuration for controlling how long generated objects
   * (images, files, etc.) remain available before expiring.
   *
   * @see StorageSettings
   * @see https://modelrunner.ai/docs/clients/js-client#object-lifecycle
   */
  readonly storageSettings?: StorageSettings;

  /**
   * Whether this request's input and output payloads are stored, overriding the
   * account default. Sent as the `X-Modelrunner-Store-IO` header.
   *
   * Set `false` to opt one request out of payload storage, or `true` to opt one
   * request back in when the account opts out by default. Omit it to leave the
   * account default in place — `false` and omitted are not the same thing.
   *
   * Note this controls storage of the request *payloads*, not the lifetime of
   * the generated media, which is `storageSettings`.
   */
  readonly storeIo?: boolean;

  /**
   * User-defined tags stored alongside the request, which can later be used to
   * filter it. They are never sent to the model and never merged into `input`.
   *
   * At most 16 keys, each key 1 to 64 characters, and each value a string of at
   * most 512 characters. Violations are rejected before the request is sent.
   *
   * Note that `metadata` is a reserved key at the top level of the request
   * body. Servers that predate request metadata treat it as model input, so an
   * endpoint with a strict input schema will reject the request.
   *
   * @see RequestMetadata
   */
  readonly metadata?: RequestMetadata;
};

export type UrlOptions = {
  /**
   * If `true`, the function will use the queue to run the function
   * asynchronously and return the result in a separate call. This
   * influences how the URL is built.
   */
  readonly subdomain?: string;

  /**
   * The query parameters to include in the URL.
   */
  readonly query?: Record<string, string>;

  /**
   * The path to append to the function URL.
   */
  path?: string;
};

export type RequestLog = {
  message: string;
  level: "STDERR" | "STDOUT" | "ERROR" | "INFO" | "WARN" | "DEBUG";
  source: "USER";
  timestamp: string; // Using string to represent date-time format, but you could also use 'Date' type if you're going to construct Date objects.
};

export type Metrics = {
  inference_time: number | null;
};

interface BaseQueueStatus {
  status: "IN_QUEUE" | "IN_PROGRESS" | "COMPLETED";
  request_id: string;
  response_url: string;
  status_url: string;
  cancel_url: string;
}

export interface InQueueQueueStatus extends BaseQueueStatus {
  status: "IN_QUEUE";
  queue_position: number;

  /**
   * Echo of the `webhookUrl` the request was submitted with, when one was set.
   * Present only on the response to `queue.submit`, and the proof that the
   * server understood the webhook — a server that ignored it echoes nothing.
   */
  webhook?: string;

  /**
   * Echo of the resolved event filter. Defaults to `["completed"]` server-side
   * when a `webhookUrl` is set without `webhookEvents`.
   */
  webhook_events_filter?: WebhookEventName[];
}

export interface InProgressQueueStatus extends BaseQueueStatus {
  status: "IN_PROGRESS";
  logs: RequestLog[];
}

export interface CompletedQueueStatus extends BaseQueueStatus {
  status: "COMPLETED";
  logs: RequestLog[];
  metrics?: Metrics;
}

export type QueueStatus =
  | InProgressQueueStatus
  | CompletedQueueStatus
  | InQueueQueueStatus;

export function isQueueStatus(obj: any): obj is QueueStatus {
  return obj && obj.status && obj.response_url;
}

export function isCompletedQueueStatus(obj: any): obj is CompletedQueueStatus {
  return isQueueStatus(obj) && obj.status === "COMPLETED";
}

export type ValidationErrorInfo = {
  msg: string;
  loc: Array<string | number>;
  type: string;
};

/**
 * A lifecycle event a request can notify a webhook about.
 *
 * `start` is **best effort**: a fast job can transition straight from `IN_QUEUE`
 * to `COMPLETED` between two provider polls, in which case only `completed` is
 * delivered. Never block waiting for `start`.
 */
export type WebhookEventName = "start" | "completed";

/**
 * Whether the request was billed, and how.
 *
 * 🚨 This — not `status` — is what tells a successful generation from a failed
 * one. A failed generation is normalized to `status: "COMPLETED"` with
 * `billingStatus: "failed"`, so code that keys off `status` alone reads every
 * failure as a success.
 */
export type WebhookBillingStatus = "pending" | "partial" | "charged" | "failed";

/**
 * The JSON body delivered to a webhook endpoint.
 *
 * It is the same object `GET /{owner}/{alias}/requests/{id}` returns, plus
 * `event` and `billingStatus` — so there is only one shape to learn.
 *
 * Note the timestamps are ISO-8601 **strings**, not `Date` instances: this is
 * whatever `JSON.parse` produced from the delivered bytes.
 */
export type WebhookPayload<Output = any, Input = any> = {
  /** The request id. Note this is `id`, not the queue API's `request_id`. */
  id: string;
  modelEndpoint: string;
  status: "IN_QUEUE" | "IN_PROGRESS" | "COMPLETED" | "FAILED" | "CANCELLED";
  event: WebhookEventName;

  /** @see WebhookBillingStatus — the real success/failure discriminator. */
  billingStatus: WebhookBillingStatus;

  output: Output;

  /**
   * The input the request was submitted with. Replaced by
   * `{ _elided: string }` when it serializes to more than 64KB — fetch the
   * request itself in that case.
   */
  input: Input | { _elided: string };

  /** ISO-8601. */
  createdAt: string;
  /** ISO-8601. */
  updatedAt?: string;
  inferenceTime?: number;
  delayTime?: number;
  logs?: string;
  error?: string;
  thumbnails?: Array<{
    type: "image" | "video";
    url: string;
    posterUrl?: string;
  }>;

  /**
   * ISO-8601 timestamp set once the request's payloads were removed under the
   * retention policy — which is what distinguishes "we deleted it" from "the
   * model returned nothing", since both leave `input`/`output` as `{}`.
   */
  payloadsPurgedAt?: string | null;

  wrapperId?: string | null;
  baseModelId?: string | null;
  baseModelEndpoint?: string | null;

  /**
   * Set only when provider fallback ran the request on an equivalent model from
   * another provider: the endpoint originally requested. `modelEndpoint` is the
   * model that actually ran.
   */
  requestedModelEndpoint?: string | null;

  metadata?: RequestMetadata;

  /**
   * Declared by the shared result contract but never populated for webhooks —
   * output-schema validation must not withhold delivery of a result that has
   * already been charged for.
   */
  validationErrors?: unknown;
};

/**
 * The webhook signing secret for the account, as returned by
 * `modelrunner.webhooks.getSecret()`.
 */
export type WebhookSecret = {
  /** The `whsec_…` secret. Store it like a password. */
  key: string;
};

/**
 * @deprecated This never described a ModelRunner delivery — it is inherited
 * from a different provider's wire format and no request has ever produced it.
 * Use {@link WebhookPayload}, and read `billingStatus` rather than `status` to
 * tell success from failure. Kept only so upgrading does not break compilation;
 * it will be removed in the next major.
 *
 * @template Payload - The type of the payload in the response. It defaults to `any`,
 * allowing for flexibility in specifying the structure of the payload.
 */
export type WebHookResponse<Payload = any> =
  | {
      /** Indicates a successful response. */
      status: "OK";
      /** The payload of the response, structure determined by the Payload type. */
      payload: Payload;
      /** Error is never present in a successful response. */
      error: never;
      /** The unique identifier for the request. */
      request_id: string;
    }
  | {
      /** Indicates an unsuccessful response. */
      status: "ERROR";
      /** The payload of the response, structure determined by the Payload type. */
      payload: Payload;
      /** Description of the error that occurred. */
      error: string;
      /** The unique identifier for the request. */
      request_id: string;
    };
