export const TARGET_URL_HEADER = "x-modelrunner-target-url";

export const DEFAULT_PROXY_ROUTE = "/api/modelrunner/proxy";

const MODELRUNNER_KEY = process.env.MODELRUNNER_KEY;
const MODELRUNNER_KEY_ID = process.env.MODELRUNNER_KEY_ID;
const MODELRUNNER_KEY_SECRET = process.env.MODELRUNNER_KEY_SECRET;

export type HeaderValue = string | string[] | undefined | null;

const MODELRUNNER_URL_REG_EXP = /(\.|^)modelrunner\.(run|ai)$/;

/**
 * The proxy behavior that is passed to the proxy handler. This is a subset of
 * request objects that are used by different frameworks, like Express and NextJS.
 */
export interface ProxyBehavior<ResponseType> {
  id: string;
  method: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  respondWith(status: number, data: string | any): ResponseType;
  sendResponse(response: Response): Promise<ResponseType>;
  getHeaders(): Record<string, HeaderValue>;
  getHeader(name: string): HeaderValue;
  sendHeader(name: string, value: string): void;
  getRequestBody(): Promise<string | undefined>;
  resolveApiKey?: () => Promise<string | undefined>;
}

/**
 * Utility to get a header value as `string` from a Headers object.
 *
 * @private
 * @param request the header value.
 * @returns the header value as `string` or `undefined` if the header is not set.
 */
function singleHeaderValue(value: HeaderValue): string | undefined {
  if (!value) {
    return undefined;
  }
  if (Array.isArray(value)) {
    return value[0];
  }
  return value;
}

function getModelrunnerKey(): string | undefined {
  if (MODELRUNNER_KEY) {
    return MODELRUNNER_KEY;
  }
  if (MODELRUNNER_KEY_ID && MODELRUNNER_KEY_SECRET) {
    return `${MODELRUNNER_KEY_ID}:${MODELRUNNER_KEY_SECRET}`;
  }
  return undefined;
}

const EXCLUDED_HEADERS = ["content-length", "content-encoding"];

/**
 * A request handler that proxies the request to the modelrunner API
 * endpoint. This is useful so client-side calls to the modelrunner endpoint
 * can be made without CORS issues and the correct credentials can be added
 * effortlessly.
 *
 * @param behavior the request proxy behavior.
 * @returns Promise<any> the promise that will be resolved once the request is done.
 */
export async function handleRequest<ResponseType>(
  behavior: ProxyBehavior<ResponseType>,
) {
  const targetUrl = singleHeaderValue(behavior.getHeader(TARGET_URL_HEADER));
  if (!targetUrl) {
    return behavior.respondWith(400, `Missing the ${TARGET_URL_HEADER} header`);
  }

  const urlHost = new URL(targetUrl).host;
  if (!MODELRUNNER_URL_REG_EXP.test(urlHost)) {
    return behavior.respondWith(412, `Invalid ${TARGET_URL_HEADER} header`);
  }

  const modelrunnerKey = behavior.resolveApiKey
    ? await behavior.resolveApiKey()
    : getModelrunnerKey();
  if (!modelrunnerKey) {
    return behavior.respondWith(401, "Missing modelrunner.ai credentials");
  }

  // pass over headers prefixed with x-modelrunner-*
  const headers: Record<string, HeaderValue> = {};
  Object.keys(behavior.getHeaders()).forEach((key) => {
    if (key.toLowerCase().startsWith("x-modelrunner-")) {
      headers[key.toLowerCase()] = behavior.getHeader(key);
    }
  });

  const proxyUserAgent = `@modelrunner/server-proxy/${behavior.id}`;
  const userAgent = singleHeaderValue(behavior.getHeader("user-agent"));
  const res = await fetch(targetUrl, {
    method: behavior.method,
    headers: {
      ...headers,
      authorization:
        singleHeaderValue(behavior.getHeader("authorization")) ??
        `Key ${modelrunnerKey}`,
      accept: "application/json",
      "content-type": "application/json",
      "user-agent": userAgent,
      "x-modelrunner-client-proxy": proxyUserAgent,
    } as HeadersInit,
    body:
      behavior.method?.toUpperCase() === "GET"
        ? undefined
        : await behavior.getRequestBody(),
  });

  // copy headers from modelrunner to the proxied response
  res.headers.forEach((value, key) => {
    if (!EXCLUDED_HEADERS.includes(key.toLowerCase())) {
      behavior.sendHeader(key, value);
    }
  });

  return behavior.sendResponse(res);
}

export function fromHeaders(
  headers: Headers,
): Record<string, string | string[]> {
  // TODO once Header.entries() is available, use that instead
  // Object.fromEntries(headers.entries());
  const result: Record<string, string | string[]> = {};
  headers.forEach((value, key) => {
    result[key] = value;
  });
  return result;
}

export const responsePassthrough = (res: Response) => Promise.resolve(res);

export const resolveApiKeyFromEnv = () => Promise.resolve(getModelrunnerKey());
