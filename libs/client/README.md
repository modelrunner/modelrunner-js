# modelrunner.ai JavaScript/TypeScript client library

<!-- ![modelrunner npm package](https://img.shields.io/npm/v/modelrunner?color=%237527D7&label=%40modelrunner%2Fclient&style=flat-square) -->

## Introduction

The `modelrunner.ai` JavaScript Client Library provides a seamless way to interact with `modelrunner` endpoints from your JavaScript or TypeScript applications. With built-in support for various platforms, it ensures consistent behavior across web, Node.js, and React Native environments.

## Getting started

Before diving into the client-specific features, ensure you've set up your credentials:

```ts
import { modelrunner } from "@modelrunner/client";

modelrunner.config({
  // Can also be auto-configured using environment variables:
  credentials: "MODELRUNNER_KEY",
});
```

**Note:** Ensure you've reviewed the [modelrunner.ai getting started guide](https://docs.modelrunner.ai) to acquire your credentials and register your functions. Also, make sure your credentials are always protected. See the [../proxy](../proxy) package for a secure way to use the client in client-side applications.

## Running functions with `modelrunner.run`

The `modelrunner.run` method is the simplest way to execute a function. It returns a promise that resolves to the function's result:

```ts
const result = await modelrunner.run("my-function-id", {
  input: { foo: "bar" },
});
```

## Long-running functions with `modelrunner.subscribe`

The `modelrunner.subscribe` method offers a powerful way to rely on the [queue system](https://docs.modelrunner.ai/clients/js-client#long-running-jobs-with-modelrunner-subscribe) to execute long-running functions. It returns the result once it's done like any other async function, so your don't have to deal with queue status updates yourself. However, it does support queue events, in case you want to listen and react to them:

```ts
const result = await modelrunner.subscribe("my-function-id", {
  input: { foo: "bar" },
  onQueueUpdate(update) {
    if (update.status === "IN_QUEUE") {
      console.log(`Your position in the queue is ${update.position}`);
    }
  },
});
```

## More features

The client library offers a plethora of features designed to simplify your journey with `modelrunner.ai`. Dive into the [official documentation](https://docs.modelrunner.ai) for a comprehensive guide.
