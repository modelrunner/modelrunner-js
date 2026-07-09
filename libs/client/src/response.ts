import { RequiredConfig } from "./config";
import { Result, ValidationErrorInfo } from "./types/common";

export type ResponseHandler<Output> = (response: Response) => Promise<Output>;

const REQUEST_ID_HEADER = "x-modelrunner-request-id";

export type ResponseHandlerCreator<Output> = (
  config: RequiredConfig,
) => ResponseHandler<Output>;

type ApiErrorArgs = {
  message: string;
  status: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any;
  requestId?: string;
};

export class ApiError<Body> extends Error {
  public readonly status: number;
  public readonly body: Body;
  public readonly requestId: string;
  constructor({ message, status, body, requestId }: ApiErrorArgs) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.body = body;
    this.requestId = requestId || "";
  }
}

type ZodIssueLike = {
  code?: string;
  path?: Array<string | number>;
  message?: string;
};

type ValidationErrorBody = {
  detail: ValidationErrorInfo[];
  message?: string;
  details?: {
    validationErrors?: ZodIssueLike[];
  };
};

function toFieldErrors(issues: ZodIssueLike[]): ValidationErrorInfo[] {
  return issues.map((issue) => ({
    loc: issue.path ?? [],
    msg: issue.message ?? "Invalid value",
    type: issue.code ?? "invalid",
  }));
}

export class ValidationError extends ApiError<ValidationErrorBody> {
  constructor(args: ApiErrorArgs) {
    super(args);
    this.name = "ValidationError";
  }

  get fieldErrors(): ValidationErrorInfo[] {
    // NOTE: this is a hack to support both FastAPI/Pydantic errors
    // and some custom 422 errors that might not be in the Pydantic format.
    if (typeof this.body.detail === "string") {
      return [
        {
          loc: ["body"],
          msg: this.body.detail,
          type: "value_error",
        },
      ];
    }
    return this.body.detail || [];
  }

  getFieldErrors(field: string): ValidationErrorInfo[] {
    return this.fieldErrors.filter(
      (error) => error.loc[error.loc.length - 1] === field,
    );
  }
}

export async function defaultResponseHandler<Output>(
  response: Response,
): Promise<Output> {
  const { status, statusText } = response;
  const contentType = response.headers.get("Content-Type") ?? "";
  const requestId = response.headers.get(REQUEST_ID_HEADER) || undefined;
  if (!response.ok) {
    if (contentType.includes("application/json")) {
      const body = await response.json();
      const message = body.message || statusText;
      if (status === 422) {
        throw new ValidationError({ message, status, body, requestId });
      }
      const validationErrors = body?.details?.validationErrors;
      if (status === 400 && Array.isArray(validationErrors)) {
        throw new ValidationError({
          message,
          status,
          // normalize the issues into `detail` so `fieldErrors` reads them,
          // while the raw ones stay reachable at `body.details`
          body: { ...body, detail: toFieldErrors(validationErrors) },
          requestId,
        });
      }
      throw new ApiError({ message, status, body, requestId });
    }
    throw new ApiError({
      message: `HTTP ${status}: ${statusText}`,
      status,
      requestId,
    });
  }
  if (contentType.includes("application/json")) {
    return response.json() as Promise<Output>;
  }
  if (contentType.includes("text/html")) {
    return response.text() as Promise<Output>;
  }
  if (contentType.includes("application/octet-stream")) {
    return response.arrayBuffer() as Promise<Output>;
  }
  // TODO convert to either number or bool automatically
  return response.text() as Promise<Output>;
}

export async function resultResponseHandler<Output>(
  response: Response,
): Promise<Result<Output>> {
  const data = await defaultResponseHandler<Output>(response);
  return {
    data,
    requestId: response.headers.get(REQUEST_ID_HEADER) || "",
  } satisfies Result<Output>;
}
