import {
  withMiddleware,
  withProxy,
  type RequestMiddleware,
} from "./middleware";
import type { ResponseHandler } from "./response";
import { defaultResponseHandler } from "./response";
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
   * By default it tries to use the `MODEL_RUNNER_KEY` environment variable, when
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
};

export type RequiredConfig = Required<Config>;

/**
 * Checks if the required MODEL_RUNNER environment variables are set.
 *
 * @returns `true` if the required environment variables are set,
 * `false` otherwise.
 */
function hasEnvVariables(): boolean {
  return (
    typeof process !== "undefined" &&
    process.env &&
    (typeof process.env.MODEL_RUNNER_KEY !== "undefined" ||
      (typeof process.env.MODEL_RUNNER_KEY_ID !== "undefined" &&
        typeof process.env.MODEL_RUNNER_KEY_SECRET !== "undefined"))
  );
}

export const credentialsFromEnv: CredentialsResolver = () => {
  if (!hasEnvVariables()) {
    return undefined;
  }

  if (typeof process.env.MODEL_RUNNER_KEY !== "undefined") {
    return process.env.MODEL_RUNNER_KEY;
  }

  return process.env.MODEL_RUNNER_KEY_ID
    ? `${process.env.MODEL_RUNNER_KEY_ID}:${process.env.MODEL_RUNNER_KEY_SECRET}`
    : undefined;
};

const DEFAULT_CONFIG: Partial<Config> = {
  credentials: credentialsFromEnv,
  suppressLocalCredentialsWarning: false,
  requestMiddleware: (request) => Promise.resolve(request),
  responseHandler: defaultResponseHandler,
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
