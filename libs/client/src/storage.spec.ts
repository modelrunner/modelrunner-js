import { createConfig, type RequiredConfig } from "./config";
import {
  buildObjectLifecycleHeaders,
  buildStoreIoHeaders,
  createStorageClient,
  MAX_EXPIRATION_SECONDS,
  MIN_EXPIRATION_SECONDS,
  MULTIPART_THRESHOLD_BYTES,
  OBJECT_LIFECYCLE_PREFERENCE_HEADER,
  OBJECT_LIFECYCYLE_PREFERENCE_HEADER,
  STORE_IO_HEADER,
} from "./storage";

jest.mock("./request", () => {
  const actual = jest.requireActual("./request");
  return {
    ...actual,
    dispatchRequest: jest.fn(),
  };
});

import { dispatchRequest } from "./request";

const mockDispatch = dispatchRequest as jest.Mock;

/**
 * A stand-in for a large file. Allocating 90 MB per test is wasteful, so this
 * reports the size the upload path branches on while holding a few bytes.
 */
function fakeFile(size: number, type = "video/mp4"): Blob {
  const blob = new Blob(["x"], { type });
  Object.defineProperty(blob, "size", { value: size });
  // `slice` on the real Blob would clamp to the actual byte length, which would
  // hide the part-splitting arithmetic under test.
  blob.slice = ((start: number, end: number) => {
    const part = new Blob(["x"]);
    Object.defineProperty(part, "size", { value: end - start });
    return part;
  }) as Blob["slice"];
  return blob;
}

function partResponse(etag: string | null, ok = true, status = 200) {
  return {
    ok,
    status,
    statusText: ok ? "OK" : "Internal Server Error",
    headers: { get: (name: string) => (/^etag$/i.test(name) ? etag : null) },
    // S3 answers an object PUT with an empty body; the single-part path runs
    // that response through the configured responseHandler.
    text: async () => "",
  } as unknown as Response;
}

/** Routes the API calls through the mock and the part PUTs through `fetch`. */
function setupMultipart({
  etag = '"abc123"',
  partResponses,
}: { etag?: string; partResponses?: Response[] } = {}) {
  const fetchMock = jest.fn();
  (partResponses ?? [partResponse(etag)]).forEach((response) =>
    fetchMock.mockResolvedValueOnce(response),
  );
  fetchMock.mockResolvedValue(partResponse(etag));

  const config: RequiredConfig = createConfig({
    credentials: "test-key",
    fetch: fetchMock as unknown as typeof fetch,
    // keep the part-retry backoff from adding seconds to the suite
    retry: { baseDelay: 0, maxDelay: 0, enableJitter: false },
  });

  mockDispatch.mockImplementation(
    async ({ targetUrl }: { targetUrl: string }) => {
      if (targetUrl.includes("/storage/upload/initiate-multipart")) {
        return {
          fileUrl: "https://media.modelrunner.ai/abc-big.mp4",
          uploadId: "upload-1",
          uploadKey: "abc-big.mp4",
        };
      }
      if (targetUrl.includes("/storage/upload/multipart-url")) {
        return { presignedUrl: "https://s3.example.com/part?sig=1" };
      }
      if (targetUrl.includes("/storage/upload/complete")) {
        // The bucket-native Location URL, deliberately different from the alias.
        return {
          fileUrl: "https://s3.eu-west-1.amazonaws.com/bucket/abc-big.mp4",
        };
      }
      if (targetUrl.includes("/storage/upload/initiate")) {
        return {
          upload_url: "https://s3.example.com/put?sig=1",
          file_url: "https://media.modelrunner.ai/abc-small.png",
        };
      }
      throw new Error(`unexpected call to ${targetUrl}`);
    },
  );

  return { config, fetchMock };
}

function callsTo(fragment: string) {
  return mockDispatch.mock.calls
    .map(([params]) => params)
    .filter((params) => params.targetUrl.includes(fragment));
}

beforeEach(() => {
  mockDispatch.mockReset();
});

/** The wire value the API reads out of the header. */
function durationOf(
  lifecycle: Parameters<typeof buildObjectLifecycleHeaders>[0],
) {
  const header =
    buildObjectLifecycleHeaders(lifecycle)[OBJECT_LIFECYCLE_PREFERENCE_HEADER];
  return header === undefined
    ? undefined
    : JSON.parse(header).expiration_duration_seconds;
}

describe("buildObjectLifecycleHeaders", () => {
  it("sends the wire shape the API reads, under the correct header name", () => {
    expect(buildObjectLifecycleHeaders({ expiresIn: "1h" })).toEqual({
      [OBJECT_LIFECYCLE_PREFERENCE_HEADER]: JSON.stringify({
        expiration_duration_seconds: 3600,
      }),
    });
  });

  it("spells the header without the historical LIFECYCYLE typo", () => {
    expect(OBJECT_LIFECYCLE_PREFERENCE_HEADER).toBe(
      "x-modelrunner-object-lifecycle-preference",
    );
  });

  // The misspelled name was public. Renaming it outright would break any
  // deep-importing caller, so it stays as an alias until the next major.
  it("keeps the misspelled name working as an alias", () => {
    expect(OBJECT_LIFECYCYLE_PREFERENCE_HEADER).toBe(
      OBJECT_LIFECYCLE_PREFERENCE_HEADER,
    );
  });

  it("omits the header only when no lifecycle was asked for", () => {
    expect(buildObjectLifecycleHeaders(undefined)).toEqual({});
  });

  // The API caps the TTL at 5 years and rejects anything longer with a 400, so
  // "never" cannot be expressed as a duration. Null is its documented spelling
  // for "no expiration"; sending 100 years, as this used to, just 400s.
  it("sends null for `never` rather than an out-of-range duration", () => {
    expect(durationOf({ expiresIn: "never" })).toBeNull();
  });

  // Omitting the header, as this used to do, reads as the account default —
  // in practice keep-forever, the opposite of what `immediate` asks for.
  it("sends the shortest accepted TTL for `immediate`, not nothing", () => {
    expect(durationOf({ expiresIn: "immediate" })).toBe(MIN_EXPIRATION_SECONDS);
  });

  it("accepts the documented aliases and the numeric bounds", () => {
    expect(durationOf({ expiresIn: "7d" })).toBe(604800);
    expect(durationOf({ expiresIn: MIN_EXPIRATION_SECONDS })).toBe(
      MIN_EXPIRATION_SECONDS,
    );
    expect(durationOf({ expiresIn: MAX_EXPIRATION_SECONDS })).toBe(
      MAX_EXPIRATION_SECONDS,
    );
  });

  // Better here than as a 400 from the API after the bytes are already uploaded.
  it.each([
    ["below the minimum", MIN_EXPIRATION_SECONDS - 1],
    ["above the maximum", MAX_EXPIRATION_SECONDS + 1],
    ["fractional", 90.5],
  ])("rejects a duration %s", (_label, expiresIn) => {
    expect(() => buildObjectLifecycleHeaders({ expiresIn })).toThrow(
      RangeError,
    );
  });
});

describe("buildStoreIoHeaders", () => {
  // The API parses this as z.enum(["0","1","true","false","TRUE","FALSE"]),
  // so "1" is read as "store" — not an assumption about an undocumented value.
  it("sends 1 to opt in and 0 to opt out", () => {
    expect(buildStoreIoHeaders(true)).toEqual({ [STORE_IO_HEADER]: "1" });
    expect(buildStoreIoHeaders(false)).toEqual({ [STORE_IO_HEADER]: "0" });
  });

  // Omitted and `false` are different requests: one defers to the account
  // default, the other overrides it.
  it("sends no header when the option is omitted", () => {
    expect(buildStoreIoHeaders(undefined)).toEqual({});
  });

  // The API's enum is strict, so a stray string would come back as a 400.
  it("rejects a non-boolean before it reaches the wire", () => {
    expect(() => buildStoreIoHeaders("0" as unknown as boolean)).toThrow(
      TypeError,
    );
  });
});

describe("upload path selection", () => {
  it("uses the single-part flow at exactly the threshold", async () => {
    const { config } = setupMultipart();
    await createStorageClient({ config }).upload(
      fakeFile(MULTIPART_THRESHOLD_BYTES),
    );

    expect(callsTo("/storage/upload/initiate-multipart")).toHaveLength(0);
    expect(callsTo("/storage/upload/initiate")).toHaveLength(1);
  });

  it("uses the multipart flow one byte over the threshold", async () => {
    const { config } = setupMultipart();
    await createStorageClient({ config }).upload(
      fakeFile(MULTIPART_THRESHOLD_BYTES + 1),
    );

    expect(callsTo("/storage/upload/initiate-multipart")).toHaveLength(1);
  });
});

describe("single-part upload", () => {
  it("sends the lifecycle header on initiate, where the row is created", async () => {
    const { config } = setupMultipart();
    const url = await createStorageClient({ config }).upload(
      fakeFile(1024, "image/png"),
      { lifecycle: { expiresIn: "1h" } },
    );

    const [initiate] = callsTo("/storage/upload/initiate");
    expect(initiate.headers).toEqual({
      [OBJECT_LIFECYCLE_PREFERENCE_HEADER]: JSON.stringify({
        expiration_duration_seconds: 3600,
      }),
    });
    expect(url).toBe("https://media.modelrunner.ai/abc-small.png");
  });

  // The API signs an SVG's presigned PUT with Content-Disposition: attachment.
  // It is part of the signature, so omitting it fails with
  // SignatureDoesNotMatch — every SVG upload used to.
  it("repeats the signed Content-Disposition for SVG", async () => {
    const { config, fetchMock } = setupMultipart();
    await createStorageClient({ config }).upload(
      fakeFile(1024, "image/svg+xml"),
    );

    expect(fetchMock.mock.calls[0][1].headers).toEqual({
      "Content-Type": "image/svg+xml",
      "Content-Disposition": "attachment",
    });
  });

  // Matched exactly, the way the API decides whether to sign it. A parameterised
  // type is not signed with a disposition, so sending one would break the
  // signature in the other direction. A type that collides with an Object
  // prototype key must not resolve to an inherited value either.
  it.each([
    ["a plain type", "image/png"],
    ["a parameterised svg type", "image/svg+xml;charset=utf-8"],
    ["a type colliding with a prototype key", "constructor"],
  ])("sends no Content-Disposition for %s", async (_label, contentType) => {
    const { config, fetchMock } = setupMultipart();
    await createStorageClient({ config }).upload(fakeFile(1024, contentType));

    expect(fetchMock.mock.calls[0][1].headers).toEqual({
      "Content-Type": contentType,
    });
  });

  // A typeless Blob is signed as application/octet-stream, so the PUT has to
  // repeat that substitute rather than re-reading the empty `file.type`.
  it("signs a typeless blob as the substituted content type", async () => {
    const { config, fetchMock } = setupMultipart();
    await createStorageClient({ config }).upload(fakeFile(1024, ""));

    const [initiate] = callsTo("/storage/upload/initiate");
    expect(initiate.input.content_type).toBe("application/octet-stream");
    expect(fetchMock.mock.calls[0][1].headers).toEqual({
      "Content-Type": "application/octet-stream",
    });
  });
});

describe("multipart upload", () => {
  // 90 MB + 1 byte splits into ten parts at a 10 MiB part size.
  const bigFileSize = MULTIPART_THRESHOLD_BYTES + 1;

  it("completes through the API carrying the lifecycle header", async () => {
    const { config } = setupMultipart();
    await createStorageClient({ config }).upload(fakeFile(bigFileSize), {
      lifecycle: { expiresIn: "1h" },
    });

    const [complete] = callsTo("/storage/upload/complete");
    expect(complete).toBeDefined();
    // The regression this whole change exists for: without this header on this
    // specific call, the file is retained forever while the caller believes it
    // expires in an hour.
    expect(complete.headers).toEqual({
      [OBJECT_LIFECYCLE_PREFERENCE_HEADER]: JSON.stringify({
        expiration_duration_seconds: 3600,
      }),
    });
    expect(complete.method).toBe("POST");
  });

  it("sends the upload handles and every part to the completion call", async () => {
    const { config } = setupMultipart();
    await createStorageClient({ config }).upload(fakeFile(bigFileSize));

    const [complete] = callsTo("/storage/upload/complete");
    expect(complete.input).toEqual({
      uploadId: "upload-1",
      uploadKey: "abc-big.mp4",
      // ETag quotes stripped, part numbers 1-based and in order.
      parts: Array.from({ length: 10 }, (_, i) => ({
        partNumber: i + 1,
        etag: "abc123",
      })),
    });
  });

  it("requests a presigned URL per part and PUTs each one", async () => {
    const { config, fetchMock } = setupMultipart();
    await createStorageClient({ config }).upload(fakeFile(bigFileSize));

    const partUrlCalls = callsTo("/storage/upload/multipart-url");
    expect(partUrlCalls).toHaveLength(10);
    expect(partUrlCalls[0].method).toBe("GET");
    expect(partUrlCalls[0].targetUrl).toContain("uploadKey=abc-big.mp4");
    expect(partUrlCalls[0].targetUrl).toContain("uploadId=upload-1");
    expect(partUrlCalls[0].targetUrl).toContain("partNumber=1");
    expect(partUrlCalls[9].targetUrl).toContain("partNumber=10");

    expect(fetchMock).toHaveBeenCalledTimes(10);
    expect(fetchMock.mock.calls[0][1]).toEqual(
      expect.objectContaining({ method: "PUT" }),
    );
  });

  it("splits the file into parts that cover it exactly", async () => {
    const { config, fetchMock } = setupMultipart();
    await createStorageClient({ config }).upload(fakeFile(bigFileSize));

    const uploaded: number = fetchMock.mock.calls.reduce(
      (total, [, init]) => total + (init.body as Blob).size,
      0,
    );
    expect(uploaded).toBe(bigFileSize);
  });

  it("returns the alias URL from initiate, not the Location from complete", async () => {
    const { config } = setupMultipart();
    const url = await createStorageClient({ config }).upload(
      fakeFile(bigFileSize),
    );

    // complete returns a bucket-native URL that is not publicly readable.
    expect(url).toBe("https://media.modelrunner.ai/abc-big.mp4");
  });

  it("retries a failed part and still records its ETag", async () => {
    const { config, fetchMock } = setupMultipart({
      partResponses: [
        partResponse(null, false, 500),
        partResponse('"retried"'),
      ],
    });
    await createStorageClient({ config }).upload(fakeFile(bigFileSize));

    const [complete] = callsTo("/storage/upload/complete");
    expect(complete.input.parts[0]).toEqual({
      partNumber: 1,
      etag: "retried",
    });
    // one retry on part 1, then nine clean parts
    expect(fetchMock).toHaveBeenCalledTimes(11);
  });

  // A 403 means the signature is wrong or expired; that will not change on a
  // second attempt, so re-sending the 10 MiB chunk is pure waste.
  it("does not retry a part that failed for a non-retryable reason", async () => {
    const { config, fetchMock } = setupMultipart({
      partResponses: [partResponse(null, false, 403)],
    });

    await expect(
      createStorageClient({ config }).upload(fakeFile(bigFileSize)),
    ).rejects.toThrow(/403/);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(callsTo("/storage/upload/complete")).toHaveLength(0);
  });

  it("fails loudly when the part response carries no ETag, without retrying", async () => {
    const { config, fetchMock } = setupMultipart({ etag: null });

    await expect(
      createStorageClient({ config }).upload(fakeFile(bigFileSize)),
    ).rejects.toThrow(/Access-Control-Expose-Headers/);
    expect(callsTo("/storage/upload/complete")).toHaveLength(0);
    // A CORS policy will not change between attempts, so the 10 MiB chunk must
    // not be re-sent.
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("refuses a file that would need more parts than S3 allows", async () => {
    const { config } = setupMultipart();
    const tooBig = 10_001 * 10 * 1024 * 1024;

    await expect(
      createStorageClient({ config }).upload(fakeFile(tooBig)),
    ).rejects.toThrow(/10000-part limit/);
    // and it fails before starting an upload it could not abort
    expect(callsTo("/storage/upload/initiate-multipart")).toHaveLength(0);
  });

  it("fails loudly when initiate omits the upload handles", async () => {
    const { config } = setupMultipart();
    mockDispatch.mockImplementation(async () => ({
      fileUrl: "https://media.modelrunner.ai/abc-big.mp4",
    }));

    await expect(
      createStorageClient({ config }).upload(fakeFile(bigFileSize)),
    ).rejects.toThrow(/uploadId/);
  });
});
