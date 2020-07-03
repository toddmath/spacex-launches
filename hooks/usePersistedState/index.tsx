import { default as createSyncPersistedState } from './create-persisted-state'
import createAsyncPersistedState from './create-async-persisted-state'
import localStorage from './storages/local-storage'
import sessionStorage from './storages/session-storage'
import isAsyncStorage from './utils/is-async-storage'
import { Storage, AsyncStorage, PersistedState } from './types'

export default function createPersistedState(
  name: string,
  storage: Storage | AsyncStorage
): [PersistedState, () => void | Promise<void>] {
  if (isAsyncStorage(storage)) {
    return createAsyncPersistedState(name, storage)
  }

  return createSyncPersistedState(name, storage)
}

// export {
//   createSyncPersistedState as createPersistedState,
//   createAsyncPersistedState,
// }

export function createPersistedLocalState(
  name: string
): [PersistedState, () => void] {
  return createSyncPersistedState(name, localStorage)
}

export function createPersistedSessionState(
  name: string
): [PersistedState, () => void] {
  return createSyncPersistedState(name, sessionStorage)
}

// import { useState, useEffect, useRef } from 'react'

// import useEventListener from '../useEventListener'
// import { isFunction } from 'utils'

// export const createStorage = (provider: Storage) => ({
//   /** get value from storage provider */
//   get(key: string, defaultValue: unknown) {
//     const json = provider.getItem(key)
//     return json == null
//       ? isFunction(defaultValue)
//         ? defaultValue()
//         : defaultValue
//       : JSON.parse(json)
//   },

//   /** set value in storage provider */
//   set(key: string, value: unknown): void {
//     provider.setItem(key, JSON.stringify(value))
//   },
// })

// const globalState = {}

// type Fn = (...args: any) => any

// export function createGlobalState(
//   key: string,
//   thisCallback: Fn,
//   initialValue: unknown
// ) {
//   if (!globalState[key]) {
//     globalState[key] = { callbacks: [], value: initialValue }
//   }

//   globalState[key].callbacks.push(thisCallback)

//   return {
//     deregister() {
//       const arr = globalState[key].callbacks
//       const index = arr.indexOf(thisCallback)
//       if (index > -1) {
//         arr.splice(index, 1)
//       }
//     },

//     emit(value) {
//       // const isNotThisCallback = cb => thisCallback !== cb

//       if (globalState[key].value !== value) {
//         globalState[key].value = value

//         if (globalState[key].callbacks.length > 0) {
//           globalState[key].callbacks
//             .filter(callback => callback !== thisCallback)
//             .forEach(callBack => callBack(value))
//         }

//         // globalState[key].callbacks.forEach(cb => {
//         //   if (thisCallback !== cb) {
//         //     cb(value)
//         //   }
//         // })
//       }
//     },
//   }
// }

// export function usePersistedState(initialState, key, { get, set }) {
//   const globalState = useRef(null)
//   const [state, setState] = useState(() => get(key, initialState))

//   const handleStorage = ({ key: k, newValue }) => {
//     if (k === key) {
//       const newState = JSON.parse(newValue)
//       if (state !== newState) {
//         setState(newState)
//       }
//     }
//   }

//   useEventListener('storage', handleStorage)

//   useEffect(() => {
//     globalState.current = createGlobalState(key, setState, initialState)
//     return () => {
//       globalState.current.deregister()
//     }
//   }, [])

//   // const handleStateChange = useCallback(() => {
//   //   set(key, state)
//   //   globalState.current.emit(state)
//   // }, [state])

//   useEffect(() => {
//     set(key, state)
//     globalState.current.emit(state)
//   }, [state])

//   // useEffect(() => {
//   //   set(key, state)
//   //   globalState.current.emit(state)
//   // }, [state])

//   return [state, setState]
// }

// export function createPersistedState(key, provider = global.localStorage) {
//   if (provider) {
//     const storage = createStorage(provider)
//     return initialState => usePersistedState(initialState, key, storage)
//   }

//   return useState
// }

// export default createPersistedState
