import { isFunction } from 'utils'

export default function <T>(
  key: string,
  initialValue: T | (() => T),
  persist: string
): T {
  let initialPersist: { [x: string]: unknown }

  try {
    initialPersist = persist ? JSON.parse(persist) : {}
  } catch {
    initialPersist = {}
  } // eslint-disable-line no-empty

  let initialOrPersistedValue = isFunction(initialValue)
    ? initialValue()
    : initialValue

  if (initialPersist && key in initialPersist) {
    initialOrPersistedValue =
      (initialPersist[key] as T) || initialOrPersistedValue
  }

  return initialOrPersistedValue
}
