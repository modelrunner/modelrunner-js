import {
  assetId,
  assetQuery,
  type AssetGallery,
  type AssetTag,
  type AssetTagInput,
  type ListAssetFilesOptions,
} from "./asset-collections";
import { getRestApiUrl, RequiredConfig } from "./config";
import type { EntityKind } from "./entity-references";
import { dispatchRequest } from "./request";

export type EntityImage = {
  fileId: string;
  url: string;
  mimeType: string;
  position: number;
};
export type Entity = {
  id: string;
  type: EntityKind;
  name: string;
  handle: string;
  description: string | null;
  coverFileId: string;
  displayCover?: { fileId: string; url: string; mimeType: string } | null;
  isFavorited?: boolean;
  tags?: AssetTag[];
  version: number;
  /** ISO timestamps returned by the API. */
  createdAt: string;
  updatedAt: string;
  files: EntityImage[];
};
export type CreateEntityInput = {
  name: string;
  handle: string;
  fileIds: readonly string[];
  coverFileId?: string;
  /** Separate character display image; never an inference reference. */
  displayCoverFileId?: string | null;
} & (
  | { type: "character"; description: string }
  | { type: Exclude<EntityKind, "character">; description?: string | null }
);
export type UpdateEntityInput = {
  version: number;
  /** Editable only for non-character entities. */
  handle?: string;
  name?: string;
  description?: string | null;
  fileIds?: readonly string[];
  coverFileId?: string;
  /** Separate character display image; never an inference reference. */
  displayCoverFileId?: string | null;
};
export type EntityCapabilities = {
  contractVersion: 1;
  writesEnabled: boolean;
  submissionsEnabled: boolean;
  newKindsEnabled: boolean;
};
export type ListEntitiesOptions = {
  q?: string;
  type?: EntityKind;
  favoritesOnly?: boolean;
  tagId?: string;
  page?: number;
  limit?: number;
};
export type EntityList = {
  items: Entity[];
  counts: Record<EntityKind, number>;
  total: number;
  page: number;
  limit: number;
  capabilities: EntityCapabilities;
};
export type EntityHandleInput =
  | { handle: string; name?: never }
  | { name: string; handle?: never };
export type EntityHandleAvailability = { handle: string; available: boolean };
export type EntityRequestOptions = { abortSignal?: AbortSignal };

/** Owner-scoped saved references. Writes are single attempts without redirects. */
export interface EntitiesClient {
  list(
    query?: ListEntitiesOptions,
    options?: EntityRequestOptions,
  ): Promise<EntityList>;
  get(id: string, options?: EntityRequestOptions): Promise<Entity>;
  create(
    input: CreateEntityInput,
    options?: EntityRequestOptions,
  ): Promise<Entity>;
  update(
    id: string,
    input: UpdateEntityInput,
    options?: EntityRequestOptions,
  ): Promise<Entity>;
  delete(id: string, options?: EntityRequestOptions): Promise<void>;
  checkHandle(
    input: EntityHandleInput,
    options?: EntityRequestOptions,
  ): Promise<EntityHandleAvailability>;
  capabilities(options?: EntityRequestOptions): Promise<EntityCapabilities>;
  listAssets(
    id: string,
    query?: ListAssetFilesOptions,
    options?: EntityRequestOptions,
  ): Promise<AssetGallery>;
  linkAssets(
    id: string,
    fileIds: readonly string[],
    options?: EntityRequestOptions,
  ): Promise<void>;
  unlinkAssets(
    id: string,
    fileIds: readonly string[],
    options?: EntityRequestOptions,
  ): Promise<void>;
  setFavorite(
    id: string,
    favorite: boolean,
    options?: EntityRequestOptions,
  ): Promise<void>;
  assignTag(
    id: string,
    tag: AssetTagInput,
    options?: EntityRequestOptions,
  ): Promise<AssetTag>;
  removeTag(
    id: string,
    tagId: string,
    options?: EntityRequestOptions,
  ): Promise<void>;
}

function entityPath(id: string): string {
  if (
    typeof id !== "string" ||
    !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id)
  )
    throw new TypeError("An entity UUID is required.");
  return `/${id}`;
}

export function createEntitiesClient({
  config,
}: {
  config: RequiredConfig;
}): EntitiesClient {
  const send = <T>(
    method: string,
    path: string,
    input?: unknown,
    options: EntityRequestOptions = {},
  ) =>
    dispatchRequest<unknown, T>({
      method,
      targetUrl: `${getRestApiUrl()}/entities${path}`,
      input,
      config,
      options: {
        signal: options.abortSignal,
        redirect: "error",
        ...(method !== "get" ? { retry: { maxRetries: 0 } } : {}),
      },
    });
  return {
    listAssets: (id, query, options) =>
      send(
        "get",
        `${entityPath(id)}/assets?${assetQuery(query)}`,
        undefined,
        options,
      ),
    linkAssets: (id, fileIds, options) =>
      send(
        "put",
        `${entityPath(id)}/assets`,
        { fileIds: [...fileIds] },
        options,
      ),
    unlinkAssets: (id, fileIds, options) =>
      send(
        "delete",
        `${entityPath(id)}/assets`,
        { fileIds: [...fileIds] },
        options,
      ),
    setFavorite: (id, favorite, options) =>
      send(
        favorite ? "put" : "delete",
        `${entityPath(id)}/favorite`,
        undefined,
        options,
      ),
    assignTag: (id, tag, options) =>
      send("post", `${entityPath(id)}/tags`, tag, options),
    removeTag: (id, tagId, options) =>
      send(
        "delete",
        `${entityPath(id)}/tags/${assetId(tagId)}`,
        undefined,
        options,
      ),
    list(query = {}, options) {
      const params = new URLSearchParams();
      for (const key of [
        "q",
        "type",
        "page",
        "limit",
        "favoritesOnly",
        "tagId",
      ] as const)
        if (query[key] !== undefined) params.set(key, String(query[key]));
      return send("get", params.size ? `?${params}` : "", undefined, options);
    },
    get: (id, options) => send("get", entityPath(id), undefined, options),
    create: (input, options) =>
      send("post", "", { ...input, fileIds: [...input.fileIds] }, options),
    update: (id, input, options) =>
      send(
        "patch",
        entityPath(id),
        {
          ...input,
          ...(input.fileIds ? { fileIds: [...input.fileIds] } : {}),
        },
        options,
      ),
    async delete(id, options) {
      await send("delete", entityPath(id), undefined, options);
    },
    checkHandle: (input, options) =>
      send("post", "/check-handle", { ...input }, options),
    capabilities: (options) => send("get", "/capabilities", undefined, options),
  };
}
