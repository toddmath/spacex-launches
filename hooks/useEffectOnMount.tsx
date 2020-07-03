import { useEffect, EffectCallback } from 'react'

export const useEffectOnMount = (effect: EffectCallback) => {
  useEffect(effect, [])
}
