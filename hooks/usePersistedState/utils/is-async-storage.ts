import { isFunction, isPromise } from 'utils'
import { AsyncStorage } from '../types'

export default function isAsyncStorage(
  storage: unknown
): storage is AsyncStorage {
  return (
    !!storage &&
    typeof (storage as any).get !== 'undefined' &&
    (isPromise((storage as any).get) ||
      (isFunction((storage as any).get) && isPromise((storage as any).get(''))))
  )
}
