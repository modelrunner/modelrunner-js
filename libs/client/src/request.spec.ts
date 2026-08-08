import { createConfig, type RequiredConfig } from "./config";
import { ApiError } from "./response";

// Spied so the tests can assert that a backoff delay was (or was not) taken,
// without waiting for real timers.
jest.mock("./utils", () => {
  const actual = jest.requireActual("./utils");
  return { ...actual, sleep: jest.fn(() => Promise.resolve()) };
});

import { dispatchRequest } from "./request";
import { sleep } from "./utils";

const sleepMock = sleep as jest.Mock;

function jsonResponse(status: number, body: unknown) {
  return {
    ok: status >= 200 && status < 300,
    status,
    statusText: `status ${status}`,
    headers: {
      get: (name: string) =>
        name.toLowerCase() === "content-type" ? "application/json" : null,
    },
    json: async () => body,
  } as unknown as Response;
}

function setup(responses: Response[], maxRetries = 3) {
  const fetchMock = jest.fn();
  responses.forEach((response) => fetchMock.mockResolvedValueOnce(response));
  // any call past the scripted ones repeats the last response
  fetchMock.mockResolvedValue(responses[responses.length - 1]);

  const config: RequiredConfig = createConfig({
    credentials: "test-key",
    fetch: fetchMock as unknown as typeof fetch,
    retry: { maxRetries, baseDelay: 10, maxDelay: 10, enableJitter: false },
  });
  return { config, fetchMock };
}

function send(config: RequiredConfig, options?: { signal?: AbortSignal }) {
  return dispatchRequest<unknown, unknown>({
    method: "post",
    targetUrl: "https://modelrunner.run/some/endpoint",
    input: { hello: "world" },
    config,
    options,
  });
}

beforeEach(() => {
  sleepMock.mockClear();
});

describe("dispatchRequest retry loop", () => {
  // 503 is in DEFAULT_RETRYABLE_STATUS_CODES. Before the fix this threw on the
  // first attempt, so a transient error killed the request outright.
  it("retries a retryable error up to maxRetries, then throws", async () => {
    const { config, fetchMock } = setup([
      jsonResponse(503, { message: "nope" }),
    ]);

    await expect(send(config)).rejects.toMatchObject({
      name: "ApiError",
      status: 503,
    });

    // the initial attempt plus maxRetries
    expect(fetchMock).toHaveBeenCalledTimes(4);
    expect(sleepMock).toHaveBeenCalledTimes(3);
  });

  it("returns the result when a retry succeeds", async () => {
    const { config, fetchMock } = setup([
      jsonResponse(429, { message: "slow down" }),
      jsonResponse(200, { data: "ok" }),
    ]);

    await expect(send(config)).resolves.toEqual({ data: "ok" });
    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(sleepMock).toHaveBeenCalledTimes(1);
  });

  // Before the fix these were retried, each with a pointless backoff delay.
  it.each([
    ["a 400", 400],
    ["a 404", 404],
    ["a 500, which is not in the retryable list", 500],
  ])("throws immediately on %s without sleeping", async (_label, status) => {
    const { config, fetchMock } = setup([
      jsonResponse(status, { message: "bad" }),
    ]);

    await expect(send(config)).rejects.toBeInstanceOf(ApiError);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(sleepMock).not.toHaveBeenCalled();
  });

  it("stops retrying once the signal is aborted", async () => {
    const { config, fetchMock } = setup([
      jsonResponse(503, { message: "nope" }),
    ]);
    const controller = new AbortController();
    controller.abort();

    await expect(
      send(config, { signal: controller.signal }),
    ).rejects.toMatchObject({ status: 503 });

    // retryable status, but the abort must win
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(sleepMock).not.toHaveBeenCalled();
  });

  it("honours a maxRetries of 0", async () => {
    const { config, fetchMock } = setup(
      [jsonResponse(503, { message: "nope" })],
      0,
    );

    await expect(send(config)).rejects.toMatchObject({ status: 503 });
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(sleepMock).not.toHaveBeenCalled();
  });
});
