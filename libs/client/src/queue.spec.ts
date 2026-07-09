import { createConfig, type RequiredConfig } from "./config";
import { createQueueClient } from "./queue";
import type { StorageClient } from "./storage";

jest.mock("./request", () => {
  const actual = jest.requireActual("./request");
  return {
    ...actual,
    dispatchRequest: jest.fn(),
  };
});

import { dispatchRequest } from "./request";

describe("queue.submit headers", () => {
  const config: RequiredConfig = createConfig({
    credentials: "test-key",
    // node test env has global fetch; rely on default resolver
  });

  const storage: StorageClient = {
    upload: jest.fn(),
    // passthrough transform to avoid touching files
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transformInput: async (input: any) => input,
  };

  beforeEach(() => {
    (dispatchRequest as jest.Mock).mockReset();
    (dispatchRequest as jest.Mock).mockResolvedValue({
      status: "IN_QUEUE",
      request_id: "req_123",
      response_url: "https://queue.modelrunner.run/x/y/requests/req_123",
      status_url: "https://queue.modelrunner.run/x/y/requests/req_123/status",
      cancel_url: "https://queue.modelrunner.run/x/y/requests/req_123/cancel",
      queue_position: 0,
    });
  });

  it("merges user headers and overrides with priority and hint", async () => {
    const queue = createQueueClient({ config, storage });
    await queue.submit("swook/inspyrenet", {
      input: { prompt: "hello" },
      // user-provided headers that should be merged
      headers: {
        "x-custom": "abc",
        // these should be overridden by explicit options
        "x-modelrunner-queue-priority": "normal",
        "x-modelrunner-hint": "old",
      },
      priority: "low",
      hint: "new-hint",
    });

    expect(dispatchRequest).toHaveBeenCalledTimes(1);
    const call = (dispatchRequest as jest.Mock).mock.calls[0][0];
    expect(call.headers).toEqual(
      expect.objectContaining({
        "x-custom": "abc",
        "x-modelrunner-queue-priority": "low",
        "x-modelrunner-hint": "new-hint",
      }),
    );
  });

  it("sets default priority and omits hint when not provided", async () => {
    const queue = createQueueClient({ config, storage });
    await queue.submit("swook/inspyrenet", {
      input: { prompt: "hi" },
    });

    const call = (dispatchRequest as jest.Mock).mock.calls[0][0];
    expect(call.headers["x-modelrunner-queue-priority"]).toBe("normal");
    expect(call.headers["x-modelrunner-hint"]).toBeUndefined();
  });
});

describe("queue.submit metadata", () => {
  const config: RequiredConfig = createConfig({ credentials: "test-key" });

  const storage: StorageClient = {
    upload: jest.fn(),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transformInput: async (input: any) => input,
  };

  beforeEach(() => {
    (dispatchRequest as jest.Mock).mockReset();
    (dispatchRequest as jest.Mock).mockResolvedValue({
      status: "IN_QUEUE",
      request_id: "req_123",
    });
  });

  it("sends metadata as a sibling of the input fields in the body", async () => {
    const queue = createQueueClient({ config, storage });
    await queue.submit("swook/inspyrenet", {
      input: { prompt: "a red panda" },
      metadata: { project: "onboarding-demo", batch: "42" },
    });

    const call = (dispatchRequest as jest.Mock).mock.calls[0][0];
    expect(call.input).toEqual({
      prompt: "a red panda",
      metadata: { project: "onboarding-demo", batch: "42" },
    });
  });

  it("omits the metadata key when not provided", async () => {
    const queue = createQueueClient({ config, storage });
    await queue.submit("swook/inspyrenet", { input: { prompt: "hi" } });

    const call = (dispatchRequest as jest.Mock).mock.calls[0][0];
    expect(call.input).not.toHaveProperty("metadata");
  });

  it("keeps metadata out of the target url and the headers", async () => {
    const queue = createQueueClient({ config, storage });
    await queue.submit("swook/inspyrenet", {
      input: { prompt: "hi" },
      metadata: { project: "onboarding-demo" },
    });

    const call = (dispatchRequest as jest.Mock).mock.calls[0][0];
    expect(call.targetUrl).not.toContain("metadata");
    expect(call.targetUrl).not.toContain("object%20Object");
    expect(call.headers).not.toHaveProperty("metadata");
  });

  it("rejects invalid metadata before dispatching the request", async () => {
    const queue = createQueueClient({ config, storage });
    const metadata = Object.fromEntries(
      Array.from({ length: 17 }, (_, i) => [`key-${i}`, "value"]),
    );

    await expect(
      queue.submit("swook/inspyrenet", { input: { prompt: "hi" }, metadata }),
    ).rejects.toThrow("Invalid metadata");
    expect(dispatchRequest).not.toHaveBeenCalled();
  });
});
