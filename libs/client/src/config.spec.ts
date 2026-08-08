import { createConfig, credentialsFromEnv } from "./config";

describe("The config test suite", () => {
  it("should set the config variables accordingly", () => {
    const newConfig = {
      credentials: "key-id:key-secret",
    };
    const currentConfig = createConfig(newConfig);
    expect(currentConfig.credentials).toEqual(newConfig.credentials);
  });
});

describe("The credentialsFromEnv test suite", () => {
  const CREDENTIAL_VARS = [
    "MODELRUNNER_KEY",
    "MODELRUNNER_KEY_ID",
    "MODELRUNNER_KEY_SECRET",
    "MODEL_RUNNER_KEY",
    "MODEL_RUNNER_KEY_ID",
    "MODEL_RUNNER_KEY_SECRET",
  ];

  let originalEnv: NodeJS.ProcessEnv;

  beforeEach(() => {
    originalEnv = process.env;
    process.env = { ...originalEnv };
    for (const name of CREDENTIAL_VARS) {
      delete process.env[name];
    }
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it("should return undefined when no credentials are set", () => {
    expect(credentialsFromEnv()).toBeUndefined();
  });

  // MODELRUNNER_* is the spelling the proxy, the Python SDK and the docs use,
  // so it has to work — reading only MODEL_RUNNER_* used to cause a silent 401.
  it("should resolve the key from MODELRUNNER_KEY", () => {
    process.env.MODELRUNNER_KEY = "canonical-key";
    expect(credentialsFromEnv()).toEqual("canonical-key");
  });

  it("should resolve the key from the legacy MODEL_RUNNER_KEY", () => {
    process.env.MODEL_RUNNER_KEY = "legacy-key";
    expect(credentialsFromEnv()).toEqual("legacy-key");
  });

  it("should prefer MODELRUNNER_KEY over the legacy spelling", () => {
    process.env.MODELRUNNER_KEY = "canonical-key";
    process.env.MODEL_RUNNER_KEY = "legacy-key";
    expect(credentialsFromEnv()).toEqual("canonical-key");
  });

  it("should join MODELRUNNER_KEY_ID and MODELRUNNER_KEY_SECRET", () => {
    process.env.MODELRUNNER_KEY_ID = "key-id";
    process.env.MODELRUNNER_KEY_SECRET = "key-secret";
    expect(credentialsFromEnv()).toEqual("key-id:key-secret");
  });

  it("should join the legacy id and secret pair", () => {
    process.env.MODEL_RUNNER_KEY_ID = "key-id";
    process.env.MODEL_RUNNER_KEY_SECRET = "key-secret";
    expect(credentialsFromEnv()).toEqual("key-id:key-secret");
  });

  it("should prefer the key over the id and secret pair", () => {
    process.env.MODELRUNNER_KEY = "canonical-key";
    process.env.MODELRUNNER_KEY_ID = "key-id";
    process.env.MODELRUNNER_KEY_SECRET = "key-secret";
    expect(credentialsFromEnv()).toEqual("canonical-key");
  });

  it("should return undefined when the pair is incomplete", () => {
    process.env.MODELRUNNER_KEY_ID = "key-id";
    expect(credentialsFromEnv()).toBeUndefined();
  });

  // `create-app` writes `MODELRUNNER_KEY=""` into .env.local when the key prompt
  // is skipped, so a blank canonical value must not shadow a usable one.
  it("should ignore an empty key and fall back to the legacy spelling", () => {
    process.env.MODELRUNNER_KEY = "";
    process.env.MODEL_RUNNER_KEY = "legacy-key";
    expect(credentialsFromEnv()).toEqual("legacy-key");
  });

  it("should ignore an empty key and fall back to the id and secret pair", () => {
    process.env.MODELRUNNER_KEY = "";
    process.env.MODELRUNNER_KEY_ID = "key-id";
    process.env.MODELRUNNER_KEY_SECRET = "key-secret";
    expect(credentialsFromEnv()).toEqual("key-id:key-secret");
  });

  it("should return undefined when every value is empty", () => {
    process.env.MODELRUNNER_KEY = "";
    process.env.MODEL_RUNNER_KEY = "";
    expect(credentialsFromEnv()).toBeUndefined();
  });

  it("should pick up credentials from the environment by default", () => {
    process.env.MODELRUNNER_KEY = "canonical-key";
    const config = createConfig({});
    expect(
      typeof config.credentials === "function"
        ? config.credentials()
        : config.credentials,
    ).toEqual("canonical-key");
  });
});
