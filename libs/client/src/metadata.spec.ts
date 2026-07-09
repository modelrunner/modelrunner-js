import { applyMetadata, validateMetadata } from "./metadata";
import { ValidationError } from "./response";
import type { RequestMetadata } from "./types/common";

const metadataOf = (entries: [string, string][]): RequestMetadata =>
  Object.fromEntries(entries);

function captureValidationError(run: () => void): ValidationError {
  try {
    run();
  } catch (error) {
    if (error instanceof ValidationError) {
      return error;
    }
    throw error;
  }
  throw new Error("expected a ValidationError to be thrown");
}

describe("applyMetadata", () => {
  it("returns the input untouched when metadata is undefined", () => {
    const input = { prompt: "a red panda" };
    expect(applyMetadata(input, {})).toBe(input);
  });

  it("does not add a metadata key when metadata is undefined", () => {
    expect(applyMetadata({ prompt: "hi" }, {})).not.toHaveProperty("metadata");
  });

  it("merges metadata as a sibling of the input fields", () => {
    const metadata = { project: "onboarding-demo" };
    expect(applyMetadata({ prompt: "a red panda" }, { metadata })).toEqual({
      prompt: "a red panda",
      metadata,
    });
  });

  it("builds a body with only metadata when there is no input", () => {
    const metadata = { project: "onboarding-demo" };
    expect(applyMetadata(undefined, { metadata })).toEqual({ metadata });
  });

  it("lets the option win over a metadata field on the input", () => {
    const metadata = { project: "onboarding-demo" };
    const body = applyMetadata(
      { prompt: "hi", metadata: { project: "from-input" } },
      { metadata },
    );
    expect(body).toEqual({ prompt: "hi", metadata });
  });

  it("does not mutate the input", () => {
    const input = { prompt: "hi" };
    applyMetadata(input, { metadata: { project: "demo" } });
    expect(input).toEqual({ prompt: "hi" });
  });

  it("throws on a get request, which carries no body", () => {
    expect(() =>
      applyMetadata({ prompt: "hi" }, { metadata: { a: "b" }, method: "GET" }),
    ).toThrow(/not supported on get requests/);
  });

  it("allows an explicitly empty metadata map", () => {
    expect(applyMetadata({ prompt: "hi" }, { metadata: {} })).toEqual({
      prompt: "hi",
      metadata: {},
    });
  });
});

describe("validateMetadata", () => {
  it("accepts a map at the exact key, key length and value length limits", () => {
    const metadata = metadataOf(
      Array.from({ length: 16 }, (_, i) => [
        `${i}`.padEnd(64, "k"),
        "v".repeat(512),
      ]),
    );
    expect(() => validateMetadata(metadata)).not.toThrow();
  });

  it("rejects more than 16 keys", () => {
    const metadata = metadataOf(
      Array.from({ length: 17 }, (_, i) => [`key-${i}`, "value"]),
    );
    expect(() => validateMetadata(metadata)).toThrow(ValidationError);
  });

  it("rejects a key longer than 64 characters", () => {
    expect(() => validateMetadata({ ["k".repeat(65)]: "value" })).toThrow(
      ValidationError,
    );
  });

  it("rejects an empty key", () => {
    expect(() => validateMetadata({ "": "value" })).toThrow(ValidationError);
  });

  it("rejects a value longer than 512 characters", () => {
    expect(() => validateMetadata({ project: "v".repeat(513) })).toThrow(
      ValidationError,
    );
  });

  it("rejects a non-string value", () => {
    const metadata = { batch: 42 } as unknown as RequestMetadata;
    expect(() => validateMetadata(metadata)).toThrow(ValidationError);
  });

  it("rejects a metadata map that is not a plain object", () => {
    const metadata = ["project"] as unknown as RequestMetadata;
    expect(() => validateMetadata(metadata)).toThrow(ValidationError);
  });

  it("reports every violation at once", () => {
    const error = captureValidationError(() =>
      validateMetadata({ "": "ok", project: "v".repeat(513) }),
    );
    expect(error.fieldErrors).toHaveLength(2);
  });

  it("exposes the offending key through getFieldErrors", () => {
    const error = captureValidationError(() =>
      validateMetadata({ project: "v".repeat(513) }),
    );
    expect(error.message).toBe("Invalid metadata");
    expect(error.status).toBe(400);
    expect(error.getFieldErrors("project")).toEqual([
      {
        loc: ["metadata", "project"],
        msg: "metadata value must be at most 512 characters",
        type: "too_big",
      },
    ]);
  });
});
