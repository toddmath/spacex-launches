import { Elem } from 'types/general.types'

export function isFunction(value: unknown): value is Function {
  return (
    (value as Function).constructor === Function && typeof value === 'function'
  )
}

export function isFn(value: unknown): value is Function {
  return (
    !!value &&
    (toString.call(value) === '[object Function]' ||
      typeof value === 'function')
  )
}

export function isPromise<T = unknown>(
  value: unknown
): value is PromiseLike<T> {
  return (
    !!value &&
    (toString.call(value) === '[object Promise]' ||
      typeof value === 'function') &&
    typeof (value as PromiseLike<unknown>).then === 'function'
  )
}

export function isElement(elem: unknown): elem is Elem {
  return (elem as Elem).addEventListener !== undefined
}

export const isClient = () => typeof window !== undefined

export function isNull(value: unknown): boolean {
  return value === null
}

export function isUndefined(value: unknown): boolean {
  return value === undefined
}

export function isEmpty(value: unknown): boolean {
  return isNull(value) || isUndefined(value)
}
