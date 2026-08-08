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

Setting `MODELRUNNER_KEY` (or the `MODELRUNNER_KEY_ID` and `MODELRUNNER_KEY_SECRET` pair) in the environment is enough — you can then drop the `credentials` option entirely.

**Note:** Ensure you've reviewed the [modelrunner.ai getting started guide](https://modelrunner.ai/docs) to acquire your credentials and register your functions. Also, make sure your credentials are always protected. See the [../proxy](../proxy) package for a secure way to use the client in client-side applications.

## Long-running functions with `modelrunner.subscribe`

The `modelrunner.subscribe` method offers a powerful way to rely on the [queue system](https://modelrunner.ai/docs/clients/js-client#call-a-model) to execute long-running functions. It returns the result once it's done like any other async function, so your don't have to deal with queue status updates yourself. However, it does support queue events, in case you want to listen and react to them:

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

## Webhooks

Instead of polling or holding a connection open, you can have `modelrunner.ai` call you back. This is the only option that survives a restart on either side, which is what makes it the right choice for multi-minute video and training jobs.

```ts
const { request_id } = await modelrunner.queue.submit("my-function-id", {
  input: { foo: "bar" },
  webhookUrl: "https://example.com/webhooks/modelrunner",
  // optional — defaults to ["completed"]
  webhookEvents: ["start", "completed"],
});
```

`start` is best effort: a fast request can go straight from `IN_QUEUE` to `COMPLETED` between two polls, in which case only `completed` is delivered. Never block waiting for `start`.

> **Changed in 1.2.0.** `webhookUrl` was previously accepted and **silently ignored** — it was sent as a query parameter the API does not read, so no callback was ever made. It is now sent correctly, which also means it is now validated: a value carried over from before (an unreachable URL, one over 2048 characters) turns a submit that used to succeed into a `400`.

### Verifying a delivery

Every delivery is signed with [Standard Webhooks](https://www.standardwebhooks.com). Fetch your secret **once** and keep it in your receiver's environment — never in a browser:

```ts
const { key } = await modelrunner.webhooks.getSecret();
```

Then verify each delivery against the **raw** request body:

```ts
import express from "express";
import { modelrunner } from "@modelrunner/client";

app.post(
  "/webhooks/modelrunner",
  // the signature covers the delivered bytes, so the raw body is required —
  // express.json() would destroy it
  express.raw({ type: "application/json" }),
  async (req, res) => {
    let payload;
    try {
      payload = await modelrunner.webhooks.verify({
        secret: process.env.MODELRUNNER_WEBHOOK_SECRET,
        headers: req.headers,
        body: req.body,
      });
    } catch (error) {
      return res.sendStatus(401);
    }
    res.sendStatus(200); // acknowledge first, then do the work
    await handle(payload);
  },
);
```

`verify` throws `WebhookVerificationError` on a missing header, a timestamp outside the 5-minute tolerance, or a signature that does not match. Treat every case the same way and never branch on the message.

### What your endpoint must do

- **Respond `2xx` directly.** Redirects are never followed, so a `301` — a missing trailing slash, an `http`→`https` upgrade, a `www.` canonicalization — is recorded as a _failed_ attempt and you will see nothing but silence.
- **Deduplicate on the `webhook-id` header.** Delivery is at-least-once and that id is stable across retries.
- A failed attempt is retried on a fixed schedule, roughly 10 times over 2 hours. Reply **`410 Gone`** to stop delivery permanently.
- Acknowledge before doing slow work. The attempt has a timeout, and a slow `200` is a failed attempt.

### Reading the payload

The body is the same object `GET /{owner}/{alias}/requests/{id}` returns, plus `event` and `billingStatus`. Timestamps are ISO-8601 strings.

> 🚨 **`status` alone cannot tell success from failure.** A failed generation is normalized to `status: "COMPLETED"` with `billingStatus: "failed"`. Code that keys off `status` reads every failure as a success — use `billingStatus`.

```ts
if (payload.event === "completed" && payload.billingStatus !== "failed") {
  console.log(payload.output);
}
```

`input` is replaced by `{ _elided: string }` when it serializes to more than 64KB; fetch the request itself in that case.

### Rotating the secret

```ts
const { key } = await modelrunner.webhooks.rotateSecret();
```

Both the old and the new secret are signed with for **24 hours** afterwards, so you have that long to deploy the new value. `verify` accepts `secrets: [next, current]` to bridge the gap. Rotating twice inside that window ends it early and breaks receivers still holding the original secret, so this call is never retried automatically.

## More features

The client library offers a plethora of features designed to simplify your journey with `modelrunner.ai`. Dive into the [official documentation](https://modelrunner.ai/docs) for a comprehensive guide.
