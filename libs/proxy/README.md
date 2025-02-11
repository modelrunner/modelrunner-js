# modelrunner.ai proxy library

![@modelrunner/server-proxy npm package](https://img.shields.io/npm/v/@modelrunner/server-proxy?color=%237527D7&label=%40modelrunner%2Fserver-proxy&style=flat-square)

## Introduction

The `@modelrunner/server-proxy` library enables you to route client requests through your own server, therefore safeguarding sensitive credentials. With built-in support for popular frameworks like Next.js and Express, setting up the proxy becomes a breeze.

### Install the proxy library:

```
npm install --save @modelrunner/server-proxy
```

## Next.js page router integration

For Next.js applications using the page router:

1. Create an API route in your Next.js app, as a convention we suggest using `pages/api/modelrunner/proxy.js` (or `.ts` if you're using TypeScript):
2. Re-export the proxy handler from the library as the default export:
   ```ts
   export { handler as default } from "@modelrunner/server-proxy/nextjs";
   ```
3. Ensure you've set the `MODELRUNNER_KEY` as an environment variable in your server, containing a valid API Key.

## Next.js app router integration

For Next.js applications using the app router:

1. Create an API route in your Next.js app, as a convention we suggest using `app/api/modelrunner/proxy/route.js` (or `.ts` if you're using TypeScript):
2. Re-export the proxy handler from the library as the default export:

   ```ts
   import { route } from "@modelrunner/server-proxy/nextjs";

   export const { GET, POST, PUT } = route;
   ```

3. Ensure you've set the `MODELRUNNER_KEY` as an environment variable in your server, containing a valid API Key.

## Express integration

For Express applications:

1. Make sure your app supports JSON payloads, either by using `express.json()` (recommended) or `body-parser`:
   ```ts
   app.use(express.json());
   ```
2. Add the proxy route and its handler. Note that if your client lives outside of the express app (i.e. the express app is solely used as an external API for other clients), you will need to allow CORS on the proxy route:

   ```ts
   import * as modelrunnerProxy from "@modelrunner/server-proxy/express";

   app.all(
     modelrunnerProxy.route, // '/api/modelrunner/proxy' or you can use your own
     cors(), // if external clients will use the proxy
     modelrunnerProxy.handler,
   );
   ```

3. Ensure you've set the `MODELRUNNER_KEY` as an environment variable in your server, containing a valid API Key.

## Client configuration

Once you've set up the proxy, you can configure the client to use it:

```ts
import { modelrunner } from "@modelrunner/client";

modelrunner.config({
  proxyUrl: "/api/modelrunner/proxy", // or https://my.app.com/api/modelrunner/proxy
});
```

Now all your client calls will route through your server proxy, so your credentials are protected.

## More information

For a deeper dive into the proxy library and its capabilities, explore the [official documentation](https://modelrunner.ai/docs).
