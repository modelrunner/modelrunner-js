jest.mock("./request", () => {
  const actual = jest.requireActual("./request");
  return {
    ...actual,
    dispatchRequest: jest.fn(),
  };
});

import { createModelrunnerClient } from "./client";
import { buildUrl, dispatchRequest } from "./request";

describe("The function test suite", () => {
  it("should build the URL with a function username/app-alias", () => {
    const alias = "modelrunner/text-to-image";
    const url = buildUrl(alias);
    expect(url).toMatch(`modelrunner.run/${alias}`);
  });
});

describe("run metadata", () => {
  const client = createModelrunnerClient({ credentials: "test-key" });

  beforeEach(() => {
    (dispatchRequest as jest.Mock).mockReset();
    (dispatchRequest as jest.Mock).mockResolvedValue({
      data: {},
      requestId: "req_123",
    });
  });

  it("sends metadata as a sibling of the input fields in the body", async () => {
    await client.run("swook/inspyrenet", {
      input: { prompt: "a red panda" },
      metadata: { project: "onboarding-demo" },
    });

    const call = (dispatchRequest as jest.Mock).mock.calls[0][0];
    expect(call.input).toEqual({
      prompt: "a red panda",
      metadata: { project: "onboarding-demo" },
    });
  });

  it("keeps metadata out of the target url", async () => {
    await client.run("swook/inspyrenet", {
      input: { prompt: "hi" },
      metadata: { project: "onboarding-demo" },
    });

    const call = (dispatchRequest as jest.Mock).mock.calls[0][0];
    expect(call.targetUrl).not.toContain("metadata");
  });

  it("rejects a get request carrying metadata before dispatching", async () => {
    await expect(
      client.run("swook/inspyrenet", {
        input: { prompt: "hi" },
        method: "get",
        metadata: { project: "onboarding-demo" },
      }),
    ).rejects.toThrow(/not supported on get requests/);
    expect(dispatchRequest).not.toHaveBeenCalled();
  });
});
