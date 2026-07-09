import { ApiError, defaultResponseHandler, ValidationError } from "./response";

function jsonResponse(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "x-modelrunner-request-id": "req_123",
    },
  });
}

async function captureError(response: Response): Promise<unknown> {
  try {
    await defaultResponseHandler(response);
  } catch (error) {
    return error;
  }
  throw new Error("expected defaultResponseHandler to throw");
}

const metadataErrorBody = {
  error: "ValidationError",
  message: "Invalid metadata",
  details: {
    validationErrors: [
      {
        code: "too_big",
        path: ["metadata", "project"],
        message: "String must contain at most 512 character(s)",
      },
    ],
  },
};

describe("defaultResponseHandler error mapping", () => {
  it("maps a 400 carrying validationErrors to a ValidationError", async () => {
    const error = await captureError(jsonResponse(metadataErrorBody, 400));

    expect(error).toBeInstanceOf(ValidationError);
    const validationError = error as ValidationError;
    expect(validationError.message).toBe("Invalid metadata");
    expect(validationError.status).toBe(400);
    expect(validationError.requestId).toBe("req_123");
  });

  it("normalizes the server issues so getFieldErrors works", async () => {
    const error = (await captureError(
      jsonResponse(metadataErrorBody, 400),
    )) as ValidationError;

    expect(error.getFieldErrors("project")).toEqual([
      {
        loc: ["metadata", "project"],
        msg: "String must contain at most 512 character(s)",
        type: "too_big",
      },
    ]);
  });

  it("keeps the raw server issues reachable on the error body", async () => {
    const error = (await captureError(
      jsonResponse(metadataErrorBody, 400),
    )) as ValidationError;

    expect(error.body.details?.validationErrors).toEqual(
      metadataErrorBody.details.validationErrors,
    );
  });

  it("leaves an ordinary 400 as a plain ApiError", async () => {
    const error = await captureError(
      jsonResponse({ message: "Bad Request" }, 400),
    );

    expect(error).toBeInstanceOf(ApiError);
    expect(error).not.toBeInstanceOf(ValidationError);
    expect((error as ApiError<unknown>).message).toBe("Bad Request");
  });

  it("still maps a 422 FastAPI/Pydantic body to a ValidationError", async () => {
    const error = await captureError(
      jsonResponse(
        {
          detail: [
            { loc: ["body", "prompt"], msg: "field required", type: "missing" },
          ],
        },
        422,
      ),
    );

    expect(error).toBeInstanceOf(ValidationError);
    expect((error as ValidationError).getFieldErrors("prompt")).toEqual([
      { loc: ["body", "prompt"], msg: "field required", type: "missing" },
    ]);
  });
});
