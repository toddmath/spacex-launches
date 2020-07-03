import { useEffect, Dispatch, SetStateAction } from 'react'
import { AsyncStorage, Storage, StorageChangeMap } from '../types'
import { isFunction, isNull, isUndefined, isEmpty } from 'utils'

function getValue<T>(key: string, value: string): T | null {
  let newState = null

  try {
    newState = JSON.parse(value)
  } catch (err) {
    console.error("use-persisted-state: Can't parse value from storage", err)
  }

  return newState && key in newState ? (newState[key] as T) : null
}

function useStorageHandler<T>(
  itemKey: string,
  storageKey: string,
  setState: Dispatch<SetStateAction<T>>,
  initialValue: T | (() => T)
) {
  return (changes: StorageChangeMap): void => {
    Object.entries(changes).forEach(([key, change]) => {
      const shouldGet =
        key === storageKey &&
        isEmpty(change.newValue) &&
        !isNull(change.oldValue) &&
        !isUndefined(change.oldValue)

      if (shouldGet) {
        const oldValue = getValue<T>(itemKey, change.oldValue)

        if (oldValue !== initialValue)
          setState(isFunction(initialValue) ? initialValue() : initialValue)
      }

      if (
        key === storageKey &&
        !isNull(change.newValue) &&
        !isUndefined(change.newValue)
      ) {
        const newValue = getValue<T>(itemKey, change.newValue)

        if (newValue !== null) setState(newValue)
      }
    })
  }
}

export default function <T>(
  key: string,
  storageKey: string,
  setState: Dispatch<SetStateAction<T>>,
  storage: AsyncStorage | Storage,
  initialValue: T | (() => T)
): void {
  useEffect(() => {
    const handleStorage = useStorageHandler<T>(
      key,
      storageKey,
      setState,
      initialValue
    )

    storage.onChanged.addListener(handleStorage)

    return () => {
      if (storage.onChanged.hasListener(handleStorage)) {
        storage.onChanged.removeListener(handleStorage)
      }
    }
  }, [initialValue, key])
}
