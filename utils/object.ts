export function entries<T, K extends keyof T>(obj: T) {
  return Object.entries(obj) as Array<[keyof T, T[K]]>
}
