import {
  copyEntityReferences,
  type EntityReferenceBinding,
} from "./entity-references";
export type CharacterReferenceBinding = Omit<EntityReferenceBinding, "type"> & {
  type: "character";
};
export type CharacterReferenceOptions = {
  references?: readonly CharacterReferenceBinding[];
};
export {
  rejectNonQueueEntityReferences as rejectNonQueueCharacterReferences,
  rejectRawEntityReferences as rejectRawCharacterReferences,
  requireCharacterReferenceSupport,
} from "./entity-references";

/** Compatibility imports remain character-only; queue options also accept Entities. */
export function copyCharacterReferences(
  references: readonly CharacterReferenceBinding[] | undefined,
): CharacterReferenceBinding[] | undefined {
  const copied = copyEntityReferences(references);
  if (copied?.some((binding) => binding.type !== "character"))
    throw new Error("Character references require character bindings.");
  return copied as CharacterReferenceBinding[] | undefined;
}
