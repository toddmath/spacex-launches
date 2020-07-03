import { ThemeKeyType } from './types'

const isSSR = () => typeof window === undefined
// export const isSystemDark =
//   !isSSR && window?.matchMedia
//     ? window?.matchMedia('(prefers-color-scheme: dark)')?.matches
//     : undefined
export let isSystemDark: boolean
if (typeof window !== undefined) {
  isSystemDark = window?.matchMedia
    ? window?.matchMedia('(prefers-color-scheme: dark)')?.matches
    : undefined
}

export function saveTheme(theme: ThemeKeyType) {
  if (isSSR()) {
    return
  }
  if (typeof window !== undefined) {
    if (window?.localStorage) {
      localStorage.setItem('selectedTheme', theme)
    }
  }
}

export function getThemeFromStorage(): ThemeKeyType | null {
  if (isSSR()) {
    return null
  }
  if (typeof window !== undefined && window?.localStorage) {
    return (localStorage?.getItem('selectedTheme') as ThemeKeyType) || null
  }
  return null
}
