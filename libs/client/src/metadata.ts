import { ValidationError } from "./response";
import { RequestMetadata, ValidationErrorInfo } from "./types/common";
import { isPlainObject } from "./utils";

const MAX_KEYS = 16;
const MIN_KEY_LENGTH = 1;
const MAX_KEY_LENGTH = 64;
const MAX_VALUE_LENGTH = 512;

function invalidMetadata(detail: ValidationErrorInfo[]): ValidationError {
  return new ValidationError({
    message: "Invalid metadata",
    status: 400,
    body: { detail },
  });
}

/**
 * Validates a metadata map against the limits enforced by the API.
 *
 * @param metadata the metadata map to validate.
 * @throws {ValidationError} if any limit is violated. The error mirrors the one
 * the API returns, so client-side and server-side violations can be inspected
 * the same way. Since no request was made, its `requestId` is empty.
 */
export function validateMetadata(metadata: RequestMetadata): void {
  if (!isPlainObject(metadata)) {
    throw invalidMetadata([
      {
        loc: ["metadata"],
        msg: "metadata must be an object",
        type: "invalid_type",
      },
    ]);
  }
  const issues: ValidationErrorInfo[] = [];
  const keys = Object.keys(metadata);
  if (keys.length > MAX_KEYS) {
    issues.push({
      loc: ["metadata"],
      msg: `metadata must have at most ${MAX_KEYS} keys`,
      type: "too_big",
    });
  }
  for (const key of keys) {
    if (key.length < MIN_KEY_LENGTH || key.length > MAX_KEY_LENGTH) {
      issues.push({
        loc: ["metadata", key],
        msg: `metadata key must be between ${MIN_KEY_LENGTH} and ${MAX_KEY_LENGTH} characters`,
        type: key.length < MIN_KEY_LENGTH ? "too_small" : "too_big",
      });
    }
    const value: unknown = metadata[key];
    if (typeof value !== "string") {
      issues.push({
        loc: ["metadata", key],
        msg: "metadata value must be a string",
        type: "invalid_type",
      });
    } else if (value.length > MAX_VALUE_LENGTH) {
      issues.push({
        loc: ["metadata", key],
        msg: `metadata value must be at most ${MAX_VALUE_LENGTH} characters`,
        type: "too_big",
      });
    }
  }
  if (issues.length > 0) {
    throw invalidMetadata(issues);
  }
}

type ApplyMetadataOptions = {
  metadata?: RequestMetadata;
  method?: string;
};

/**
 * Merges `metadata` into the request body as a sibling of the model input
 * fields, which is how the API expects to receive it. Call this with the input
 * already transformed by the storage client, so that files are never uploaded
 * from the metadata map.
 *
 * When the input declares its own `metadata` field, the option wins, since the
 * API reserves the key at the top level of the body.
 *
 * @param input the model input, i.e. the request body so far.
 * @param options the metadata to attach and the HTTP method of the request.
 * @returns the body to send, or `input` untouched when there is no metadata.
 * @throws {Error} if metadata is set on a `get` request, which carries no body.
 * @throws {ValidationError} if the metadata violates the API limits.
 */
export function applyMetadata<Input>(
  input: Input | undefined,
  { metadata, method }: ApplyMetadataOptions,
): Input | undefined {
  if (metadata === undefined) {
    return input;
  }
  if ((method ?? "post").toLowerCase() === "get") {
    throw new Error(
      "The metadata option is not supported on get requests, as they carry no body.",
    );
  }
  validateMetadata(metadata);
  return Object.assign({}, input, { metadata }) as Input;
}
