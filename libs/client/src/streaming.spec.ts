jest.mock("./request", () => {
  const actual = jest.requireActual("./request");
  return {
    ...actual,
    dispatchRequest: jest.fn(),
  };
});

import { createConfig, type RequiredConfig } from "./config";
import { dispatchRequest } from "./request";
import type { StorageClient } from "./storage";
import { createStreamingClient } from "./streaming";

describe("stream metadata", () => {
  const config: RequiredConfig = createConfig({ credentials: "test-key" });

  const storage: StorageClient = {
    upload: jest.fn(),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transformInput: async (input: any) => input,
  };

  beforeEach(() => {
    (dispatchRequest as jest.Mock).mockReset();
    (dispatchRequest as jest.Mock).mockResolvedValue({});
  });

  it("sends metadata as a sibling of the input fields in the body", async () => {
    const streaming = createStreamingClient({ config, storage });
    await streaming.stream("swook/inspyrenet", {
      input: { prompt: "a red panda" },
      metadata: { project: "onboarding-demo" },
    });

    const call = (dispatchRequest as jest.Mock).mock.calls[0][0];
    expect(call.input).toEqual({
      prompt: "a red panda",
      metadata: { project: "onboarding-demo" },
    });
  });

  it("omits the metadata key when not provided", async () => {
    const streaming = createStreamingClient({ config, storage });
    await streaming.stream("swook/inspyrenet", { input: { prompt: "hi" } });

    const call = (dispatchRequest as jest.Mock).mock.calls[0][0];
    expect(call.input).not.toHaveProperty("metadata");
  });

  it("rejects a get request carrying metadata before dispatching", async () => {
    const streaming = createStreamingClient({ config, storage });

    await expect(
      streaming.stream("swook/inspyrenet", {
        input: { prompt: "hi" },
        method: "get",
        metadata: { project: "onboarding-demo" },
      }),
    ).rejects.toThrow(/not supported on get requests/);
    expect(dispatchRequest).not.toHaveBeenCalled();
  });

  it("rejects invalid metadata before dispatching the request", async () => {
    const streaming = createStreamingClient({ config, storage });

    await expect(
      streaming.stream("swook/inspyrenet", {
        input: { prompt: "hi" },
        metadata: { project: "v".repeat(513) },
      }),
    ).rejects.toThrow("Invalid metadata");
    expect(dispatchRequest).not.toHaveBeenCalled();
  });
});
