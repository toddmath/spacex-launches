import { theme } from './theme'

export type ThemeKeyType = keyof typeof theme | 'system'

export interface ThemeState {
  selected: ThemeKeyType
}
