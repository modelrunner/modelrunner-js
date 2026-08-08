import { getRestApiUrl, RequiredConfig } from "./config";
import { dispatchRequest } from "./request";
import { ApiError } from "./response";
import {
  calculateBackoffDelay,
  DEFAULT_RETRYABLE_STATUS_CODES,
  isRetryableError,
} from "./retry";
import { isPlainObject, sleep } from "./utils";

type ObjectExpiration =
  | "never"
  | "immediate"
  | "1h"
  | "1d"
  | "7d"
  | "30d"
  | "1y"
  | number;

/** Shortest TTL the API accepts. */
export const MIN_EXPIRATION_SECONDS = 60;

/** Longest TTL the API accepts, 5 years. */
export const MAX_EXPIRATION_SECONDS = 157_680_000;

export const OBJECT_LIFECYCLE_PREFERENCE_HEADER =
  "x-modelrunner-object-lifecycle-preference";

/**
 * @deprecated Misspelled ("LIFECYCYLE"). Use
 * {@link OBJECT_LIFECYCLE_PREFERENCE_HEADER}. Kept as an alias for one major
 * version; it holds the same value.
 */
export const OBJECT_LIFECYCYLE_PREFERENCE_HEADER =
  OBJECT_LIFECYCLE_PREFERENCE_HEADER;

/**
 * Opts a single request in or out of storing its input/output payloads.
 *
 * @see buildStoreIoHeaders
 */
export const STORE_IO_HEADER = "x-modelrunner-store-io";

/**
 * Files at or below this size go through the single-part upload; larger ones
 * use the multipart flow.
 */
export const MULTIPART_THRESHOLD_BYTES = 90 * 1024 * 1024;

/**
 * Size of each multipart part. S3 requires every part except the last to be at
 * least 5 MiB.
 */
const MULTIPART_PART_SIZE_BYTES = 10 * 1024 * 1024;

/** S3 accepts at most 10,000 parts in one multipart upload. */
const MAX_MULTIPART_PARTS = 10_000;

/**
 * Status codes worth re-sending a part for. Wider than the client default by
 * 500: a part PUT is idempotent and S3 documents `InternalError` as retryable,
 * so re-sending is safe. Anything outside this set — a 403 from an expired
 * signature, say — will not heal, and retrying only re-transfers the chunk.
 */
const PART_RETRYABLE_STATUS_CODES = [...DEFAULT_RETRYABLE_STATUS_CODES, 500];

/**
 * Configuration for object lifecycle and storage behavior.
 */
export interface StorageSettings {
  /**
   * The expiration time for the stored files (images, videos, etc.). You can specify one of the enumerated values or a number of seconds.
   */
  expiresIn: ObjectExpiration;
}

const EXPIRATION_VALUES: Record<
  Exclude<ObjectExpiration, number>,
  number | null
> = {
  // `null` is the API's documented "no expiration". This used to send 100 years
  // in seconds, which is over the 5-year maximum, so the request was rejected
  // outright with a 400.
  never: null,
  // The API's floor is 60s — there is no shorter TTL to ask for. This used to
  // send no header at all, which the platform reads as keep-forever: the exact
  // opposite of what the caller asked for.
  immediate: MIN_EXPIRATION_SECONDS,
  "1h": 3600,
  "1d": 86400,
  "7d": 604800,
  "30d": 2592000,
  "1y": 31536000,
};

function describeAllowedExpirations(): string {
  return (
    `one of ${Object.keys(EXPIRATION_VALUES).join(", ")}, or a whole number ` +
    `of seconds between ${MIN_EXPIRATION_SECONDS} and ${MAX_EXPIRATION_SECONDS}`
  );
}

/**
 * Converts a `StorageSettings` to the expiration duration in seconds.
 *
 * @param lifecycle the lifecycle preference
 * @returns the duration in seconds, or `null` for "keep forever"
 * @throws RangeError if the value is outside what the API accepts, so a bad TTL
 * fails here rather than as a 400 after the bytes have been uploaded
 */
export function getExpirationDurationSeconds(
  lifecycle: StorageSettings,
): number | null {
  const { expiresIn } = lifecycle;

  if (typeof expiresIn === "number") {
    if (
      !Number.isInteger(expiresIn) ||
      expiresIn < MIN_EXPIRATION_SECONDS ||
      expiresIn > MAX_EXPIRATION_SECONDS
    ) {
      throw new RangeError(
        `Invalid expiresIn: ${expiresIn}. Expected ${describeAllowedExpirations()}.`,
      );
    }
    return expiresIn;
  }

  if (!(expiresIn in EXPIRATION_VALUES)) {
    throw new RangeError(
      `Invalid expiresIn: ${String(expiresIn)}. Expected ${describeAllowedExpirations()}.`,
    );
  }
  return EXPIRATION_VALUES[expiresIn];
}

/**
 * Builds the headers for the Object Lifecycle preference to be used in API requests.
 * This is used by the queue and run APIs to control the lifecycle of generated objects.
 *
 * @param lifecycle the lifecycle preference
 * @returns a record with the `X-Modelrunner-Object-Lifecycle-Preference` header
 */
export function buildObjectLifecycleHeaders(
  lifecycle: StorageSettings | undefined,
): Record<string, string> {
  if (!lifecycle) {
    return {};
  }
  // Always sent once a lifecycle is given, including the `null` that means
  // "keep forever" — omitting the header instead would silently fall back to
  // the account default, which is not the same thing.
  return {
    [OBJECT_LIFECYCLE_PREFERENCE_HEADER]: JSON.stringify({
      expiration_duration_seconds: getExpirationDurationSeconds(lifecycle),
    }),
  };
}

/**
 * Builds the header that opts a single request in or out of storing its
 * input/output payloads, overriding the account default.
 *
 * The API parses this as a strict enum (`"0" | "1" | "true" | "false" | "TRUE"
 * | "FALSE"`) and rejects anything else, so a non-boolean is caught here rather
 * than coming back as a 400.
 *
 * @param storeIo `false` to opt out, `true` to opt in, `undefined` to leave the
 * account default in place
 * @returns a record with the `X-Modelrunner-Store-IO` header, or `{}`
 * @throws TypeError if `storeIo` is neither a boolean nor `undefined`
 */
export function buildStoreIoHeaders(
  storeIo: boolean | undefined,
): Record<string, string> {
  if (storeIo === undefined) {
    return {};
  }
  if (typeof storeIo !== "boolean") {
    throw new TypeError(
      `Invalid storeIo: ${JSON.stringify(storeIo)}. Expected a boolean.`,
    );
  }
  // "1" is what the API reads as "store" — not a guess about an undocumented
  // direction. Without it, an account that opts out by default could never opt
  // a single request back in.
  return { [STORE_IO_HEADER]: storeIo ? "1" : "0" };
}

/**
 * Content type whose presigned PUT is signed with an extra
 * `Content-Disposition`, which the upload has to repeat verbatim.
 */
const CONTENT_DISPOSITION_SIGNED_TYPES = new Map([
  // The API forces SVG to download rather than render on the media domain, so a
  // crafted file cannot run its inline <script> as same-site script. That header
  // is part of the signature, so omitting it here fails with
  // `SignatureDoesNotMatch`.
  ["image/svg+xml", "attachment"],
]);

/**
 * The headers a presigned object PUT must carry for its signature to match.
 *
 * The content type is matched exactly, mirroring the API's own
 * `contentType === "image/svg+xml"` check: a type carrying parameters
 * (`image/svg+xml;charset=utf-8`) is not signed with a disposition there, so
 * sending one here would break the signature just as surely as omitting it.
 */
function buildPresignedPutHeaders(contentType: string): Record<string, string> {
  const contentDisposition = CONTENT_DISPOSITION_SIGNED_TYPES.get(contentType);
  return {
    "Content-Type": contentType,
    ...(contentDisposition && { "Content-Disposition": contentDisposition }),
  };
}

/**
 * Options for uploading a file.
 */
export type UploadOptions = {
  /**
   * How long the uploaded file should be kept before it expires. Sent as the
   * `X-Modelrunner-Object-Lifecycle-Preference` header, the same one the run and
   * queue paths use for generated media.
   *
   * The countdown starts when the upload is initiated. A file you later pass as
   * a request input stops expiring — the server will not delete an asset that is
   * still referenced.
   *
   * Honoured by both upload paths: single-part records the expiry when the
   * upload is initiated, multipart when it completes.
   */
  lifecycle?: StorageSettings;
};

/**
 * File support for the client. This interface establishes the contract for
 * uploading files to the server and transforming the input to replace file
 * objects with URLs.
 */
export interface StorageClient {
  /**
   * Upload a file to the server. Returns the URL of the uploaded file.
   * @param file the file to upload
   * @param options optional parameters, such as lifecycle configuration
   * @returns the URL of the uploaded file
   */
  upload: (file: Blob, options?: UploadOptions) => Promise<string>;

  /**
   * Transform the input to replace file objects with URLs. This is used
   * to transform the input before sending it to the server and ensures
   * that the server receives URLs instead of file objects.
   *
   * @param input the input to transform.
   * @returns the transformed input.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transformInput: (input: Record<string, any>) => Promise<Record<string, any>>;
}

type InitiateUploadResult = {
  file_url: string;
  upload_url: string;
};

type InitiateUploadData = {
  file_name: string;
  content_type: string | null;
};

/**
 * Get the file extension from the content type. This is used to generate
 * a file name if the file name is not provided.
 *
 * @param contentType the content type of the file.
 * @returns the file extension or `bin` if the content type is not recognized.
 */
function getExtensionFromContentType(contentType: string): string {
  const [, fileType] = contentType.split("/");
  // Optional on `fileType`, not on the split result: a content type with no
  // slash at all (`"binary"`) leaves it undefined, which used to throw here
  // rather than fall back to `bin` as intended.
  return fileType?.split(/[-;]/)[0] ?? "bin";
}

/**
 * Initiate the upload of a file to the server. This returns the URL to upload
 * the file to and the URL of the file once it is uploaded.
 */
async function initiateUpload(
  file: Blob,
  config: RequiredConfig,
  contentType: string,
  lifecycle?: StorageSettings,
): Promise<InitiateUploadResult> {
  const filename =
    file.name || `${Date.now()}.${getExtensionFromContentType(contentType)}`;

  // Reuses the exact header the run/queue paths send. This previously sent
  // `X-Modelrunner-Object-Lifecycle` with an extra `allow_io_storage` field —
  // a name and shape the API has never read, so an upload TTL was silently
  // dropped and the file was kept forever.
  const headers = buildObjectLifecycleHeaders(lifecycle);

  return await dispatchRequest<InitiateUploadData, InitiateUploadResult>({
    method: "POST",
    // NOTE: We want to test V3 without making it the default at the API level
    targetUrl: `${getRestApiUrl()}/storage/upload/initiate`,
    input: {
      content_type: contentType,
      file_name: filename,
    },
    config,
    headers,
  });
}

type InitiateMultipartUploadResult = {
  /**
   * The public alias URL the file will be readable at. Note this is NOT the URL
   * `/storage/upload/complete` returns — see `multipartUpload`.
   */
  fileUrl: string;
  uploadId: string;
  uploadKey: string;
};

type MultipartPart = {
  partNumber: number;
  etag: string;
};

/**
 * Initiate a multipart upload. Returns the handles (`uploadId`, `uploadKey`)
 * that the per-part and completion calls are addressed with.
 */
async function initiateMultipartUpload(
  file: Blob,
  config: RequiredConfig,
  contentType: string,
  lifecycle?: StorageSettings,
): Promise<InitiateMultipartUploadResult> {
  const filename =
    file.name || `${Date.now()}.${getExtensionFromContentType(contentType)}`;

  // The API reads the lifecycle header on `/complete` for multipart, not here —
  // that is where the `files` row is created. It is sent on both calls so the
  // preference still lands if the stamping point ever moves to the initiate.
  const headers = buildObjectLifecycleHeaders(lifecycle);

  const result = await dispatchRequest<
    InitiateUploadData & { size: number },
    InitiateMultipartUploadResult
  >({
    method: "POST",
    targetUrl: `${getRestApiUrl()}/storage/upload/initiate-multipart`,
    input: {
      content_type: contentType,
      file_name: filename,
      size: file.size,
    },
    config,
    headers,
  });

  // Fail here with something actionable rather than downstream on a `undefined`
  // upload handle.
  if (!result?.uploadId || !result?.uploadKey || !result?.fileUrl) {
    throw new Error(
      "Multipart upload could not be initiated: the response is missing " +
        "`uploadId`, `uploadKey` or `fileUrl`.",
    );
  }
  return result;
}

/**
 * Get the presigned URL for a single part. Each part is signed on demand rather
 * than derived from a base URL — only the API can sign them.
 */
async function getMultipartPartUrl(
  config: RequiredConfig,
  { uploadKey, uploadId }: InitiateMultipartUploadResult,
  partNumber: number,
): Promise<string> {
  const query = new URLSearchParams({
    uploadKey,
    uploadId,
    partNumber: String(partNumber),
  });
  const { presignedUrl } = await dispatchRequest<
    never,
    { presignedUrl: string }
  >({
    method: "GET",
    targetUrl: `${getRestApiUrl()}/storage/upload/multipart-url?${query}`,
    config,
  });
  return presignedUrl;
}

/**
 * PUT one part to its presigned URL and return the ETag S3 assigned it, which
 * the completion call needs to reassemble the object.
 */
async function uploadPart(
  uploadUrl: string,
  chunk: Blob,
  partNumber: number,
  config: RequiredConfig,
  tries = 3,
): Promise<MultipartPart> {
  const { fetch, retry } = config;
  let lastError: unknown;
  let response: Response | undefined;

  for (let attempt = 0; attempt < tries; attempt++) {
    try {
      // No `Content-Type`: the part URL is signed without one, and the sliced
      // chunk carries no type, so fetch omits the header.
      const attemptResponse = await fetch(uploadUrl, {
        method: "PUT",
        body: chunk,
      });
      if (!attemptResponse.ok) {
        throw new ApiError({
          message: `Failed to upload part ${partNumber}: HTTP ${attemptResponse.status} ${attemptResponse.statusText}`,
          status: attemptResponse.status,
        });
      }
      response = attemptResponse;
      break;
    } catch (error) {
      lastError = error;
      // A 403 from an expired signature will not heal, so re-sending 10 MiB
      // twice more only wastes the caller's bandwidth. A non-`ApiError` is a
      // network-level failure, which is exactly what retrying is for.
      const retryable =
        !(error instanceof ApiError) ||
        isRetryableError(error, PART_RETRYABLE_STATUS_CODES);
      if (!retryable) {
        throw error;
      }
      // Back off before re-sending the chunk; hammering a transient 503 with
      // 10 MiB immediately is what the delay exists to avoid.
      if (attempt < tries - 1) {
        await sleep(
          calculateBackoffDelay(
            attempt,
            retry.baseDelay,
            retry.maxDelay,
            retry.backoffMultiplier,
            retry.enableJitter,
          ),
        );
      }
    }
  }

  if (!response) {
    // Surface the real failure instead of a generic "retries exhausted".
    throw lastError;
  }

  // S3 answers a part upload with an empty body and the ETag in a header, so
  // this is read off the headers rather than parsed from the body. Checked
  // outside the retry loop: a missing ETag means the bucket's CORS policy does
  // not expose it, which will not change between attempts, so retrying would
  // re-transfer the chunk for nothing.
  const etag = response.headers.get("ETag") ?? response.headers.get("etag");
  if (!etag) {
    throw new Error(
      `Part ${partNumber} uploaded but no ETag was returned. In a browser this ` +
        "usually means the storage bucket's CORS policy does not list ETag " +
        "under Access-Control-Expose-Headers.",
    );
  }
  // S3 quotes the ETag; the API expects it bare.
  return { partNumber, etag: etag.replace(/"/g, "") };
}

async function multipartUpload(
  file: Blob,
  config: RequiredConfig,
  lifecycle?: StorageSettings,
): Promise<string> {
  const contentType = file.type || "application/octet-stream";

  // Checked before initiating: an upload started here could not be aborted, and
  // the failure would otherwise surface only after transferring ~100 GiB.
  const partCount = Math.ceil(file.size / MULTIPART_PART_SIZE_BYTES);
  if (partCount > MAX_MULTIPART_PARTS) {
    throw new RangeError(
      `File is too large to upload: ${file.size} bytes needs ${partCount} parts, ` +
        `over the ${MAX_MULTIPART_PARTS}-part limit.`,
    );
  }

  const upload = await initiateMultipartUpload(
    file,
    config,
    contentType,
    lifecycle,
  );

  const parts: MultipartPart[] = [];

  for (let i = 0; i < partCount; i++) {
    const start = i * MULTIPART_PART_SIZE_BYTES;
    const end = Math.min(start + MULTIPART_PART_SIZE_BYTES, file.size);
    const partNumber = i + 1;

    const presignedUrl = await getMultipartPartUrl(config, upload, partNumber);
    parts.push(
      await uploadPart(
        presignedUrl,
        file.slice(start, end),
        partNumber,
        config,
      ),
    );
  }

  // Completion goes through the API rather than straight to the presigned host.
  // That is what makes the lifecycle preference stick: the API creates the
  // `files` row here and stamps its expiry from this header. Posting to the
  // presigned URL — as this client used to — skips that entirely and the
  // requested TTL is silently lost.
  await dispatchRequest<
    { uploadId: string; uploadKey: string; parts: MultipartPart[] },
    { fileUrl: string }
  >({
    method: "POST",
    targetUrl: `${getRestApiUrl()}/storage/upload/complete`,
    input: {
      uploadId: upload.uploadId,
      uploadKey: upload.uploadKey,
      parts,
    },
    config,
    headers: buildObjectLifecycleHeaders(lifecycle),
  });

  // Deliberately the URL from *initiate*, not the one `/complete` returns: that
  // one is the bucket-native S3 Location, which is not publicly readable and
  // does not match the `files` row, which is keyed by this alias URL.
  return upload.fileUrl;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type KeyValuePair = [string, any];

type StorageClientDependencies = {
  config: RequiredConfig;
};

export function createStorageClient({
  config,
}: StorageClientDependencies): StorageClient {
  const ref: StorageClient = {
    upload: async (file: Blob, options?: UploadOptions) => {
      const lifecycle = options?.lifecycle;

      if (file.size > MULTIPART_THRESHOLD_BYTES) {
        return await multipartUpload(file, config, lifecycle);
      }

      const contentType = file.type || "application/octet-stream";

      const { fetch, responseHandler } = config;
      const { upload_url: uploadUrl, file_url: url } = await initiateUpload(
        file,
        config,
        contentType,
        lifecycle,
      );
      const response = await fetch(uploadUrl, {
        method: "PUT",
        body: file,
        // Built from the same `contentType` that was sent to initiate — the
        // signature covers what the API signed, which for a typeless Blob is
        // the substituted `application/octet-stream`, not `file.type`.
        headers: buildPresignedPutHeaders(contentType),
      });
      await responseHandler(response);
      return url;
    },

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transformInput: async (input: any): Promise<any> => {
      if (Array.isArray(input)) {
        return Promise.all(input.map((item) => ref.transformInput(item)));
      } else if (input instanceof Blob) {
        return await ref.upload(input);
      } else if (isPlainObject(input)) {
        const inputObject = input as Record<string, any>;
        const promises = Object.entries(inputObject).map(
          async ([key, value]): Promise<KeyValuePair> => {
            return [key, await ref.transformInput(value)];
          },
        );
        const results = await Promise.all(promises);
        return Object.fromEntries(results);
      }
      // Return the input as is if it's neither an object nor a file/blob/data URI
      return input;
    },
  };
  return ref;
}
