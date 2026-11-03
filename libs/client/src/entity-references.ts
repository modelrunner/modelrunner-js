import { getRestApiUrl, RequiredConfig } from "./config";
import { dispatchRequest } from "./request";
import { defaultResponseHandler } from "./response";

export const ENTITY_KINDS = [
  "character",
  "prop",
  "environment",
  "style",
  "scene",
] as const;
export type EntityKind = (typeof ENTITY_KINDS)[number];
export type EntityReferenceBinding = {
  type: EntityKind;
  id: string;
  mention: string;
  version: number;
  file_ids?: string[];
};

/** Explicit, version-bound selections. Plain @words never trigger a lookup. */
export type EntityReferenceOptions = {
  references?: readonly EntityReferenceBinding[];
};

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const MODULES = new Set([
  "characters",
  "entities",
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

export function rejectRawEntityReferences(input: unknown): void {
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
export function copyEntityReferences(
  references: readonly EntityReferenceBinding[] | undefined,
): EntityReferenceBinding[] | undefined {
  if (references === undefined) return undefined;
  if (
    !Array.isArray(references) ||
    references.length < 1 ||
    references.length > 8
  )
    throw new Error("Select between one and eight entity references.");
  const ids = new Set<string>();
  const handles = new Set<string>();
  return references.map((binding) => {
    if (
      !binding ||
      Object.keys(binding).some(
        (key) =>
          !["type", "id", "mention", "version", "file_ids"].includes(key),
      ) ||
      !ENTITY_KINDS.includes(binding.type) ||
      typeof binding.id !== "string" ||
      typeof binding.mention !== "string" ||
      !UUID.test(binding.id) ||
      !/^[a-z][a-z0-9_-]{0,63}$/.test(binding.mention) ||
      /^(?:image|video|audio|element)\d+$/.test(binding.mention) ||
      !Number.isSafeInteger(binding.version) ||
      binding.version < 1 ||
      ids.has(binding.id) ||
      handles.has(binding.mention)
    )
      throw new Error("Invalid or duplicate entity reference.");
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
      throw new Error("Choose one to twenty unique reference image IDs.");
    return {
      ...binding,
      ...(binding.file_ids === undefined
        ? {}
        : { file_ids: [...binding.file_ids] }),
    };
  });
}

type ReferenceModel = {
  characterReferences?: { contractVersion?: number; enabled?: boolean };
  entityReferences?: {
    contractVersion?: number;
    enabled?: boolean;
    supportedKinds?: EntityKind[];
    mode?: string;
    maxEntities?: number;
  };
};

async function referenceModel(
  config: RequiredConfig,
  endpoint: string,
  signal?: AbortSignal,
): Promise<ReferenceModel> {
  if (
    !/^[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+(?:\/[a-zA-Z0-9_-]+)*$/.test(endpoint) ||
    MODULES.has(endpoint.split("/")[0].toLowerCase())
  )
    throw new Error("Entity references require a direct model endpoint.");
  return dispatchRequest<undefined, ReferenceModel>({
    method: "get",
    targetUrl: `${getRestApiUrl()}/models/${endpoint}`,
    config: { ...config, responseHandler: defaultResponseHandler },
    options: { signal },
  });
}

/** Preserve character-v1 negotiation on upgraded clients and older servers. */
export async function requireCharacterReferenceSupport(
  config: RequiredConfig,
  endpoint: string,
  signal?: AbortSignal,
): Promise<void> {
  const model = await referenceModel(config, endpoint, signal);
  if (
    model.characterReferences?.contractVersion !== 1 ||
    model.characterReferences.enabled !== true
  )
    throw new Error(
      "This server/model does not accept character reference contract v1. Bindings were not submitted.",
    );
}

/** Negotiate model kinds and concrete owner eligibility before ANY input upload. */
export async function requireEntityReferenceSupport(
  config: RequiredConfig,
  endpoint: string,
  bindings: readonly EntityReferenceBinding[],
  signal?: AbortSignal,
): Promise<void> {
  if (bindings.every((binding) => binding.type === "character"))
    return requireCharacterReferenceSupport(config, endpoint, signal);
  const model = await referenceModel(config, endpoint, signal);
  const capability = model.entityReferences;
  if (
    capability?.contractVersion !== 1 ||
    capability.enabled !== true ||
    !Array.isArray(capability.supportedKinds) ||
    !["image-list", "description-only"].includes(capability.mode ?? "") ||
    !Number.isInteger(capability.maxEntities) ||
    (capability.maxEntities ?? 0) < bindings.length ||
    bindings.some(
      (binding) => !capability.supportedKinds?.includes(binding.type),
    )
  )
    throw new Error(
      "This server/model does not accept the selected entity kinds. Bindings were not submitted.",
    );
  const owner = await dispatchRequest<
    undefined,
    {
      contractVersion?: number;
      newKindsEnabled?: boolean;
      submissionsEnabled?: boolean;
    }
  >({
    method: "get",
    targetUrl: `${getRestApiUrl()}/entities/capabilities`,
    config: { ...config, responseHandler: defaultResponseHandler },
    options: { signal },
  });
  if (
    owner.contractVersion !== 1 ||
    owner.newKindsEnabled !== true ||
    owner.submissionsEnabled !== true
  )
    throw new Error(
      "Entity submissions are not enabled for this account. Bindings were not submitted.",
    );
}

/** A queue-only option must never be silently dropped by run/stream. */
export function rejectNonQueueEntityReferences(options: object): void {
  if (
    "references" in options &&
    Reflect.get(options, "references") !== undefined
  ) {
    throw new Error("Entity references require queue.submit or subscribe.");
  }
}
