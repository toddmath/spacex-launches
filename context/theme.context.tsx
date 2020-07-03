import {
  createContext,
  useContext,
  useState,
  useMemo,
  Dispatch,
  SetStateAction,
} from 'react'

// import { Theme } from 'styles/theme'
import { ThemeKeyType } from 'styles/types'

type ThemeModeCtx = [ThemeKeyType, Dispatch<SetStateAction<ThemeKeyType>>]

const ThemeModeContext = createContext<ThemeModeCtx>(null)

export function useThemeMode() {
  const context = useContext(ThemeModeContext)

  if (!context) {
    throw new Error('useTheme must be called within ThemeModeProvider')
  }

  return context
}

interface Props {
  children?: React.ReactNode
}

export default function ThemeModeProvider({ children }: Props) {
  const [themeMode, setThemeMode] = useState<ThemeKeyType>('light')

  const value = useMemo(() => [themeMode, setThemeMode], [
    setThemeMode,
  ]) as ThemeModeCtx

  return (
    <ThemeModeContext.Provider value={value}>
      {children}
    </ThemeModeContext.Provider>
  )
}
