# The modelrunner.ai JS client

![modelrunner npm package](https://img.shields.io/npm/v/modelrunner?color=%237527D7&label=client&style=flat-square)
![@modelrunner/server-proxy npm package](https://img.shields.io/npm/v/@modelrunner/server-proxy?color=%237527D7&label=proxy&style=flat-square)
![Build](https://img.shields.io/github/actions/workflow/status/modelrunner/modelrunner-js/build.yml?style=flat-square)
![License](https://img.shields.io/github/license/modelrunner/modelrunner-js?style=flat-square)

## About the Project

The modelrunner JavaScript/TypeScript Client is a robust and user-friendly library designed for seamless integration of modelrunner endpoints in Web, Node.js, and React Native applications. Developed in TypeScript, it provides developers with type safety right from the start.

## Getting Started

The `modelrunner` library serves as a client for modelrunner apps hosted on modelrunner. For guidance on consuming and creating apps, refer to the [quickstart guide](https://modelrunner.ai/docs).

### Client Library

This client library is crafted as a lightweight layer atop platform standards like `fetch`. This ensures a hassle-free integration into your existing codebase. Moreover, it addresses platform disparities, guaranteeing flawless operation across various JavaScript runtimes.

> **Note:**
> Ensure you've reviewed the [getting started guide](https://modelrunner.ai/docs) to acquire your credentials, browser existing APIs, or create your custom functions.

1. Install the client library
   ```sh
   npm install --save modelrunner
   ```
2. Start by configuring your credentials:

   ```ts
   import { modelrunner } from "@modelrunner/client";

   modelrunner.config({
     // Can also be auto-configured using environment variables:
     credentials: "MODELRUNNER_KEY",
   });
   ```

3. Retrieve your function id and execute it:
   ```ts
   const result = await modelrunner.run("user/app-alias");
   ```

The result's type is contingent upon your Python function's output. Types in Python are mapped to their corresponding types in JavaScript.

See the available [model APIs](https://modelrunner.ai/models) for more details.

### The modelrunner client proxy

Although the modelrunner client is designed to work in any JS environment, including directly in your browser, **it is not recommended** to store your credentials in your client source code. The common practice is to use your own server to serve as a proxy to modelrunner APIs. Luckily modelrunner supports that out-of-the-box with plug-and-play proxy functions for the most common engines/frameworks.

For example, if you are using Next.js, you can:

1. Instal the proxy library
   ```sh
   npm install --save @modelrunner/server-proxy
   ```
2. Add the proxy as an API endpoint of your app, see an example here in [pages/api/modelrunner/proxy.ts](https://github.com/modelrunner/modelrunner-js/blob/main/apps/demo-nextjs-page-router/pages/api/modelrunner/proxy.ts)
   ```ts
   export { handler as default } from "@modelrunner/server-proxy/nextjs";
   ```
3. Configure the client to use the proxy:
   ```ts
   import { modelrunner } from "@modelrunner/client";
   modelrunner.config({
     proxyUrl: "/api/modelrunner/proxy",
   });
   ```
4. Make sure your server has `MODELRUNNER_KEY` as environment variable with a valid API Key. That's it! Now your client calls will route through your server proxy, so your credentials are protected.

See [libs/proxy](./libs/proxy/) for more details.

### The example Next.js app

You can find a minimal Next.js + modelrunner application examples in [apps/demo-nextjs-page-router/](https://github.com/modelrunner/modelrunner-js/blob/main/apps/demo-nextjs-page-router).

1. Run `npm install` on the repository root.
2. Create a `.env.local` file and add your API Key as `MODELRUNNER_KEY` environment variable (or export it any other way your prefer).
3. Run `npx nx serve demo-nextjs-page-router` to start the Next.js app (`demo-nextjs-app-router` is also available if you're interested in the app router version).

Check our [Next.js integration docs](https://modelrunner.ai/docs/integrations/nextjs) for more details.

## Roadmap

See the [open feature requests](https://github.com/modelrunner/modelrunner-js/labels/enhancement) for a list of proposed features and join the discussion.

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Make sure you read our [Code of Conduct](https://github.com/modelrunner/modelrunner-js/blob/main/CODE_OF_CONDUCT.md)
2. Fork the project and clone your fork
3. Setup the local environment with `npm install`
4. Create a feature branch (`git checkout -b feature/add-cool-thing`) or a bugfix branch (`git checkout -b fix/smash-that-bug`)
5. Commit the changes (`git commit -m 'feat(client): added a cool thing'`) - use [conventional commits](https://conventionalcommits.org)
6. Push to the branch (`git push --set-upstream origin feature/add-cool-thing`)
7. Open a Pull Request

Check the [good first issue queue](https://github.com/modelrunner/modelrunner-js/labels/good+first+issue), your contribution will be welcome!

## License

Distributed under the MIT License. See [LICENSE](https://github.com/modelrunner/modelrunner-js/blob/main/LICENSE) for more information.
