import { getRestApiUrl, RequiredConfig } from "./config";
import { dispatchRequest } from "./request";
import { defaultResponseHandler } from "./response";

export type CharacterReferenceBinding = {
  type: "character";
  id: string;
  mention: string;
  version: number;
  file_ids?: string[];
};

/** Explicit, version-bound selections. Plain @words never trigger a lookup. */
export type CharacterReferenceOptions = {
  references?: readonly CharacterReferenceBinding[];
};

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const MODULES = new Set([
  "characters",
  "models",
  "wrappers",
  "storage",
  "files",
  "keys",
  "tokens",
  "endpoints",
  "requests",
  "billing",
  "deployments",
  "gpus",
  "search",
  "collections",
  "tags",
  "webhooks",
  "retention",
  "internal",
]);

export function rejectRawCharacterReferences(input: unknown): void {
  if (
    input &&
    typeof input === "object" &&
    Object.prototype.hasOwnProperty.call(input, "modelrunner_references")
  ) {
    throw new Error(
      "Use the references queue option instead of modelrunner_references in model input.",
    );
  }
}

/** Validate and detach before any asynchronous work or uploads. */
export function copyCharacterReferences(
  references: readonly CharacterReferenceBinding[] | undefined,
): CharacterReferenceBinding[] | undefined {
  if (references === undefined) return undefined;
  if (
    !Array.isArray(references) ||
    references.length < 1 ||
    references.length > 8
  )
    throw new Error("Select between one and eight character references.");
  const ids = new Set<string>();
  const handles = new Set<string>();
  return references.map((binding) => {
    if (
      !binding ||
      Object.keys(binding).some(
        (key) =>
          !["type", "id", "mention", "version", "file_ids"].includes(key),
      ) ||
      binding.type !== "character" ||
      !UUID.test(binding.id) ||
      !/^[a-z][a-z0-9_-]{0,63}$/.test(binding.mention) ||
      /^(?:image|video|audio|element)\d+$/.test(binding.mention) ||
      !Number.isSafeInteger(binding.version) ||
      binding.version < 1 ||
      ids.has(binding.id) ||
      handles.has(binding.mention)
    )
      throw new Error("Invalid or duplicate character reference.");
    ids.add(binding.id);
    handles.add(binding.mention);
    if (
      binding.file_ids !== undefined &&
      (!Array.isArray(binding.file_ids) ||
        binding.file_ids.length < 1 ||
        binding.file_ids.length > 20 ||
        binding.file_ids.some(
          (id) => typeof id !== "string" || !UUID.test(id),
        ) ||
        new Set(binding.file_ids).size !== binding.file_ids.length)
    )
      throw new Error("Choose one to twenty unique character image IDs.");
    return {
      ...binding,
      ...(binding.file_ids === undefined
        ? {}
        : { file_ids: [...binding.file_ids] }),
    };
  });
}

/** No POST is sent to a server that has not advertised this contract. */
export async function requireCharacterReferenceSupport(
  config: RequiredConfig,
  endpoint: string,
  signal?: AbortSignal,
): Promise<void> {
  if (
    !/^[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+(?:\/[a-zA-Z0-9_-]+)*$/.test(endpoint) ||
    MODULES.has(endpoint.split("/")[0].toLowerCase())
  )
    throw new Error("Character references require a direct model endpoint.");
  const model = await dispatchRequest<
    undefined,
    { characterReferences?: { contractVersion?: number; enabled?: boolean } }
  >({
    method: "get",
    targetUrl: `${getRestApiUrl()}/models/${endpoint}`,
    config: { ...config, responseHandler: defaultResponseHandler },
    options: { signal },
  });
  if (
    model.characterReferences?.contractVersion !== 1 ||
    model.characterReferences.enabled !== true
  )
    throw new Error(
      "This server/model does not accept character reference contract v1. Bindings were not submitted.",
    );
}

/** A queue-only option must never be silently dropped by run/stream. */
export function rejectNonQueueCharacterReferences(options: object): void {
  if (
    "references" in options &&
    Reflect.get(options, "references") !== undefined
  ) {
    throw new Error("Character references require queue.submit or subscribe.");
  }
}
