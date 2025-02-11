import { createModelrunnerClient, type ModelRunnerClient } from "./client";
import { Config } from "./config";
import { StreamOptions } from "./streaming";
import { EndpointType, InputType } from "./types/client";
import { RunOptions } from "./types/common";

export { createModelrunnerClient, type ModelRunnerClient } from "./client";
export { withMiddleware, withProxy } from "./middleware";
export type { RequestMiddleware } from "./middleware";
export type { QueueClient } from "./queue";
export type { RealtimeClient } from "./realtime";
export { ApiError, ValidationError } from "./response";
export type { ResponseHandler } from "./response";
export type { StorageClient } from "./storage";
export type { ModelRunnerStream, StreamingClient } from "./streaming";
export * from "./types/common";
export type {
  QueueStatus,
  ValidationErrorInfo,
  WebHookResponse,
} from "./types/common";
export { parseEndpointId } from "./utils";

type SingletonModelRunnerClient = {
  config(config: Config): void;
} & ModelRunnerClient;

/**
 * Creates a singleton instance of the client. This is useful as a compatibility
 * layer for existing code that uses the clients version prior to 1.0.0.
 */
export const modelrunner: SingletonModelRunnerClient =
  (function createSingletonModelRunnerClient() {
    let currentInstance: ModelRunnerClient = createModelrunnerClient();
    return {
      config(config: Config) {
        currentInstance = createModelrunnerClient(config);
      },
      get queue() {
        return currentInstance.queue;
      },
      get realtime() {
        return currentInstance.realtime;
      },
      get storage() {
        return currentInstance.storage;
      },
      get streaming() {
        return currentInstance.streaming;
      },
      run<Id extends EndpointType>(id: Id, options: RunOptions<InputType<Id>>) {
        return currentInstance.run<Id>(id, options);
      },
      subscribe<Id extends EndpointType>(
        endpointId: Id,
        options: RunOptions<InputType<Id>>,
      ) {
        return currentInstance.subscribe<Id>(endpointId, options);
      },
      stream<Id extends EndpointType>(
        endpointId: Id,
        options: StreamOptions<InputType<Id>>,
      ) {
        return currentInstance.stream<Id>(endpointId, options);
      },
    } satisfies SingletonModelRunnerClient;
  })();
