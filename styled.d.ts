import 'styled-components'
import {} from 'styled-components/cssprop'
import { Theme } from 'styles/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
