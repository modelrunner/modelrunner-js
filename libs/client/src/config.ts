import {
  withMiddleware,
  withProxy,
  type RequestMiddleware,
} from "./middleware";
import type { ResponseHandler } from "./response";
import { defaultResponseHandler } from "./response";
import { DEFAULT_RETRY_OPTIONS, type RetryOptions } from "./retry";
import { isBrowser } from "./runtime";

export type CredentialsResolver = () => string | undefined;

type FetchType = typeof fetch;

export function resolveDefaultFetch(): FetchType {
  if (typeof fetch === "undefined") {
    throw new Error(
      "Your environment does not support fetch. Please provide your own fetch implementation.",
    );
  }
  return fetch;
}

export type Config = {
  /**
   * The credentials to use for the modelrunner client. When using the
   * client in the browser, it's recommended to use a proxy server to avoid
   * exposing the credentials in the client's environment.
   *
   * By default it tries to use the `MODELRUNNER_KEY` environment variable, when
   * `process.env` is defined.
   *
   * @see https://modelrunner.ai/docs/model-endpoints/server-side
   * @see #suppressLocalCredentialsWarning
   */
  credentials?: undefined | string | CredentialsResolver;
  /**
   * Suppresses the warning when the modelrunner credentials are exposed in the
   * browser's environment. Make sure you understand the security implications
   * before enabling this option.
   */
  suppressLocalCredentialsWarning?: boolean;
  /**
   * The URL of the proxy server to use for the client requests. The proxy
   * server should forward the requests to the modelrunner api.
   */
  proxyUrl?: string;
  /**
   * The request middleware to use for the client requests. By default it
   * doesn't apply any middleware.
   */
  requestMiddleware?: RequestMiddleware;
  /**
   * The response handler to use for the client requests. By default it uses
   * a built-in response handler that returns the JSON response.
   */
  responseHandler?: ResponseHandler<any>;
  /**
   * The fetch implementation to use for the client requests. By default it uses
   * the global `fetch` function.
   */
  fetch?: FetchType;
  /**
   * Retry configuration for handling transient errors like rate limiting and server errors.
   * When not specified, a default retry configuration is used.
   */
  retry?: Partial<RetryOptions>;
};

export type RequiredConfig = Required<Config>;

/**
 * Reads the credentials from the environment.
 *
 * `MODELRUNNER_*` is the canonical spelling across the platform — it's what the
 * proxy, the Python SDK and every doc use. The `MODEL_RUNNER_*` spelling is only
 * ever read by this client, so it's kept as a fallback for anyone who worked
 * around the mismatch before it was fixed.
 *
 * Each `process.env.NAME` is written out in full rather than read through a
 * local alias or a computed key: bundlers that inline environment variables
 * (webpack's DefinePlugin, esbuild/Vite `define`, Next.js) substitute that exact
 * member expression and nothing else, so anything shorter breaks them.
 *
 * An empty value falls through to the next candidate — a blank `.env` entry is
 * a variable nobody filled in, not a credential, and letting it win would send
 * an empty key and reproduce the very 401 this resolution order exists to fix.
 */
function credentialsFromProcessEnv(): {
  key?: string;
  keyId?: string;
  keySecret?: string;
} {
  if (typeof process === "undefined" || !process.env) {
    return {};
  }
  return {
    key: process.env.MODELRUNNER_KEY || process.env.MODEL_RUNNER_KEY,
    keyId: process.env.MODELRUNNER_KEY_ID || process.env.MODEL_RUNNER_KEY_ID,
    keySecret:
      process.env.MODELRUNNER_KEY_SECRET || process.env.MODEL_RUNNER_KEY_SECRET,
  };
}

export const credentialsFromEnv: CredentialsResolver = () => {
  const { key, keyId, keySecret } = credentialsFromProcessEnv();

  return key || (keyId && keySecret ? `${keyId}:${keySecret}` : undefined);
};

const DEFAULT_CONFIG: Partial<Config> = {
  credentials: credentialsFromEnv,
  suppressLocalCredentialsWarning: false,
  requestMiddleware: (request) => Promise.resolve(request),
  responseHandler: defaultResponseHandler,
  retry: DEFAULT_RETRY_OPTIONS,
};

/**
 * Configures the modelrunner client.
 *
 * @param config the new configuration.
 */
export function createConfig(config: Config): RequiredConfig {
  let configuration = {
    ...DEFAULT_CONFIG,
    ...config,
    fetch: config.fetch ?? resolveDefaultFetch(),
    // Merge retry configuration with defaults
    retry: {
      ...DEFAULT_RETRY_OPTIONS,
      ...(config.retry || {}),
    },
  } as RequiredConfig;
  if (config.proxyUrl) {
    configuration = {
      ...configuration,
      requestMiddleware: withMiddleware(
        configuration.requestMiddleware,
        withProxy({ targetUrl: config.proxyUrl }),
      ),
    };
  }
  const { credentials: resolveCredentials, suppressLocalCredentialsWarning } =
    configuration;
  const credentials =
    typeof resolveCredentials === "function"
      ? resolveCredentials()
      : resolveCredentials;
  if (isBrowser() && credentials && !suppressLocalCredentialsWarning) {
    console.warn(
      "The modelrunner credentials are exposed in the browser's environment. " +
        "That's not recommended for production use cases.",
    );
  }
  return configuration;
}

/**
 * @returns the URL of the modelrunner REST api endpoint.
 */
export function getRestApiUrl(): string {
  return "https://modelrunner.run";
}
