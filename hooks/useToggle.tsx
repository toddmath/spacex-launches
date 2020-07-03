import { useState, useCallback } from 'react'

export default function useToggle(initialValue = false) {
  const [isToggle, setIsToggle] = useState(initialValue)
  return {
    isToggle,
    toggle: useCallback(() => setIsToggle(t => !t), []),
    setTrue: useCallback(() => setIsToggle(true), []),
    setFalse: useCallback(() => setIsToggle(false), []),
  } as const
}
