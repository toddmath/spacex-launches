import { SetStateAction } from 'react'
import { isFunction } from 'utils'

export default function <T>(newState: SetStateAction<T>, state: T): T {
  let newValue: T

  newValue = isFunction(newState) ? newState(state) : newState

  // if (isFunction(newState)) {
  //   newValue = newState(state)
  // } else {
  //   newValue = newState
  // }

  return newValue
}
