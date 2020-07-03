import { useRef, useEffect, MutableRefObject } from 'react'

/**
 * Custom hook to save a callback between renders using a React ref object.
 * @author Todd Matheson / https://github.com/toddmath
 * @param {T} callback Any value to save across renders, and update on re-render.
 * @returns {MutableRefObject<T>} Saved Ref object.
 */
export default function useSavedRef<T>(callback: T): MutableRefObject<T> {
  const savedCallback = useRef<T>(null)

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  return savedCallback
}
