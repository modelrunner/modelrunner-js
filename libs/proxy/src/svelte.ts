import { type RequestHandler } from "@sveltejs/kit";
import { fromHeaders, handleRequest } from "./index";

type RequestHandlerParams = {
  /**
   * The credentials to use for the request. Usually comes from `$env/static/private`
   */
  credentials?: string | undefined;
};

/**
 * Creates the SvelteKit request handler for the modelrunner.ai client proxy on App Router apps.
 * The passed credentials will be used to authenticate the request, if not provided the
 * environment variable `MODELRUNNER_KEY` will be used.
 *
 * @param params the request handler parameters.
 * @returns the SvelteKit request handler.
 */
export const createRequestHandler = ({
  credentials,
}: RequestHandlerParams = {}) => {
  const handler: RequestHandler = async ({ request }) => {
    const MODELRUNNER_KEY = credentials || process.env.MODELRUNNER_KEY || "";
    const responseHeaders = new Headers({
      "Content-Type": "application/json",
    });
    return await handleRequest({
      id: "svelte-app-router",
      method: request.method,
      getRequestBody: async () => request.text(),
      getHeaders: () => fromHeaders(request.headers),
      getHeader: (name) => request.headers.get(name),
      sendHeader: (name, value) => (responseHeaders[name] = value),
      resolveApiKey: () => Promise.resolve(MODELRUNNER_KEY),
      respondWith: (status, data) =>
        new Response(JSON.stringify(data), {
          status,
          headers: responseHeaders,
        }),
      sendResponse: async (res) => {
        return new Response(res.body, res);
      },
    });
  };
  return {
    requestHandler: handler,
    GET: handler,
    POST: handler,
    PUT: handler,
  };
};
