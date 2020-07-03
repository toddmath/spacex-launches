// type StorageProvider = WindowLocalStorage | WindowSessionStorage | Storage
export type UsePersistedState<T> = [
  T,
  (value: T | ((previousState: T) => T)) => void
]

export type PersistedState = <T>(
  key: string,
  initialValue: T
) => UsePersistedState<T>

export interface StorageChange {
  oldValue?: string | null
  newValue?: string | null
}

export type StorageChangeMap = { [key: string]: StorageChange }

export type StorageChangeListener = (changes: {
  [key: string]: StorageChange
}) => void

export interface StorageChangeEvent {
  addListener(listener: StorageChangeListener): void
  removeListener(listener: StorageChangeListener): void
  hasListener(listener: StorageChangeListener): boolean
}

export interface Storage {
  get: (keys: string | string[]) => { [key: string]: string }
  set: (items: { [key: string]: string }) => void
  remove: (keys: string | string[]) => void
  onChanged: StorageChangeEvent
}

export interface AsyncStorage {
  get: (keys: string | string[]) => Promise<{ [key: string]: string }>
  set: (items: { [key: string]: string }) => Promise<void>
  remove: (keys: string | string[]) => Promise<void>
  onChanged: StorageChangeEvent
}
