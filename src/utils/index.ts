export const isNonNullable = <T>(item: T | undefined): item is T => {
  return !!item
}
