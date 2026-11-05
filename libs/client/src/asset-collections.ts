import { getRestApiUrl, type RequiredConfig } from "./config";
import type { EntityRequestOptions } from "./entities";
import { dispatchRequest } from "./request";

export type AssetTag = { id: string; name: string };
export type AssetRuleCondition =
  | { field: "model" | "tag" | "entity"; value: string }
  | { field: "source"; value: "upload" | "output" | "input" | "external" }
  | { field: "createdAt"; operator: "before" | "after"; value: string }
  | { field: "mediaType"; value: "image" | "video" | "audio" | "model" }
  | { field: "favorite"; value: boolean };
/** At most three group levels and twenty conditions; validated by the API. */
export type AssetRuleGroup = {
  match: "all" | "any";
  rules: (AssetRuleCondition | AssetRuleGroup)[];
};
export type AssetCollection = {
  id: string;
  name: string;
  description: string | null;
  kind: "manual" | "smart";
  parentId: string | null;
  version: number;
  rules: AssetRuleGroup | null;
  isFavorited: boolean;
  tags: AssetTag[];
  createdAt: string;
  updatedAt: string;
};
export type CreateAssetCollectionInput = {
  /** Keep this UUID stable when reconciling an uncertain create outcome. */
  operationId: string;
  name: string;
  description?: string | null;
  parentId?: string | null;
} & (
  | { kind: "manual"; rules?: null }
  | { kind: "smart"; rules: AssetRuleGroup }
);
export type UpdateAssetCollectionInput = {
  version: number;
  name?: string;
  description?: string | null;
  parentId?: string | null;
  rules?: AssetRuleGroup;
};
export type AssetFile = {
  id: string;
  url: string;
  thumbnailUrl: string | null;
  userId: string | null;
  mimeType: string | null;
  sizeBytes: number | null;
  storageKey: string | null;
  source: "upload" | "request_output" | "external";
  createdAt: string;
  isFavorited: boolean;
  tags: AssetTag[];
};
export type AssetGalleryItem = AssetFile & {
  generated: boolean;
  manuallyLinked: boolean;
  requestId: string | null;
  modelEndpoint: string | null;
};
export type AssetGallery = {
  items: AssetGalleryItem[];
  total: number;
  page: number;
  limit: number;
};
export type ListAssetFilesOptions = {
  page?: number;
  limit?: number;
  q?: string;
  mimeTypePrefix?: string;
  order?: "newest" | "oldest";
  sources?: readonly ("upload" | "output" | "input" | "external")[];
  tagIds?: readonly string[];
  tagRule?: "all" | "any";
  favoritesOnly?: boolean;
  modelEndpoint?: string;
  createdAfter?: string;
  createdBefore?: string;
};
export type AssetFileList = {
  items: AssetFile[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
};
export type AssetTagInput =
  | { tagId: string; name?: never }
  | { name: string; tagId?: never };
export function assetId(id: string): string {
  if (
    typeof id !== "string" ||
    !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id)
  )
    throw new TypeError("An asset or collection UUID is required.");
  return encodeURIComponent(id);
}
export function assetQuery(query: ListAssetFilesOptions = {}): URLSearchParams {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(query)) {
    if (value === undefined) continue;
    if (Array.isArray(value))
      for (const item of value) params.append(key, String(item));
    else params.set(key, String(value));
  }
  return params;
}
/** Private organization only. Membership and favorite writes are idempotent. */
export interface AssetCollectionsClient {
  list(options?: EntityRequestOptions): Promise<{ items: AssetCollection[] }>;
  get(id: string, options?: EntityRequestOptions): Promise<AssetCollection>;
  create(
    input: CreateAssetCollectionInput,
    options?: EntityRequestOptions,
  ): Promise<AssetCollection>;
  update(
    id: string,
    input: UpdateAssetCollectionInput,
    options?: EntityRequestOptions,
  ): Promise<AssetCollection>;
  delete(
    id: string,
    version: number,
    options?: EntityRequestOptions,
  ): Promise<void>;
  addFiles(
    id: string,
    fileIds: readonly string[],
    options?: EntityRequestOptions,
  ): Promise<void>;
  removeFiles(
    id: string,
    fileIds: readonly string[],
    options?: EntityRequestOptions,
  ): Promise<void>;
  listFiles(
    id: string,
    query?: ListAssetFilesOptions,
    options?: EntityRequestOptions,
  ): Promise<AssetFileList>;
  preview(
    rules: AssetRuleGroup,
    options?: EntityRequestOptions,
  ): Promise<{ valid: boolean; total: number; invalid: string[] }>;
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
export function createAssetCollectionsClient({
  config,
}: {
  config: RequiredConfig;
}): AssetCollectionsClient {
  const send = <T>(
    method: string,
    path: string,
    input?: unknown,
    options: EntityRequestOptions = {},
  ) =>
    dispatchRequest<unknown, T>({
      method,
      targetUrl: `${getRestApiUrl()}${path}`,
      input,
      config,
      options: {
        signal: options.abortSignal,
        redirect: "error",
        retry: { maxRetries: 0 },
      },
    });
  const path = (id: string) => `/asset-collections/${assetId(id)}`;
  return {
    list: (options) => send("get", "/asset-collections", undefined, options),
    get: (id, options) => send("get", path(id), undefined, options),
    create: (input, options) =>
      send("post", "/asset-collections", input, options),
    update: (id, input, options) => send("patch", path(id), input, options),
    delete: (id, version, options) =>
      send("delete", path(id), { version }, options),
    addFiles: (id, fileIds, options) =>
      send("put", `${path(id)}/files`, { fileIds: [...fileIds] }, options),
    removeFiles: (id, fileIds, options) =>
      send("delete", `${path(id)}/files`, { fileIds: [...fileIds] }, options),
    listFiles: (id, query, options) => {
      const params = assetQuery(query);
      params.set("collectionId", assetId(id));
      return send("get", `/files?${params}`, undefined, options);
    },
    preview: (rules, options) =>
      send("post", "/asset-collections/preview", rules, options),
    setFavorite: (id, favorite, options) =>
      send(
        favorite ? "put" : "delete",
        `${path(id)}/favorite`,
        undefined,
        options,
      ),
    assignTag: (id, tag, options) =>
      send("post", `${path(id)}/tags`, tag, options),
    removeTag: (id, tagId, options) =>
      send("delete", `${path(id)}/tags/${assetId(tagId)}`, undefined, options),
  };
}
