/**
 * @module media
 * Taken from {@see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/32914}
 */

import {
  css,
  DefaultTheme,
  CSSObject,
  InterpolationFunction,
  ThemedStyledProps,
  Interpolation,
  FlattenInterpolation,
} from 'styled-components'

import { KeyOf } from 'types/general.types'

interface Sizes {
  readonly small: 600
  readonly medium: 1024
  readonly large: 1440
  readonly xlarge: 1920
}

/**
 * `@types/styled-component` is not working properly as explained in the github issue referenced above.
 * We must overcome this with custom typings, however, this might not work in time as the styled-components update.
 * Be carefull and keep an eye on the issue and the possible improvements
 * @see {@link https://github.com/DefinitelyTyped/DefinitelyTyped/issues/32914}
 * @example
 * const SomeDiv = styled.div`
 *    display: flex;
 *    ${media.medium`
 *        display: block
 *    }
 * `;
 */
type MediaFunction = <P extends object>(
  first:
    | TemplateStringsArray
    | CSSObject
    | InterpolationFunction<ThemedStyledProps<P, DefaultTheme>>,
  ...interpolations: Array<Interpolation<ThemedStyledProps<P, DefaultTheme>>>
) => FlattenInterpolation<ThemedStyledProps<P, DefaultTheme>>

export const sizes: Sizes = {
  small: 600,
  medium: 1024,
  large: 1440,
  xlarge: 1920,
} as const

// type MediaSizes = keyof typeof sizes
type MediaQueries = KeyOf<typeof sizes>
type MediaEntries = Array<[MediaQueries, 600 | 1024 | 1440 | 1920]>

const toEm = (n: number) => (+n / 16).toFixed(2)

export const media = (Object.entries(sizes) as MediaEntries).reduce(
  (acc, [key, val]) => {
    acc[key] = (first: any, ...interpolations: any[]) => css`
      @media screen and (max-width: ${toEm(val)}em) {
        ${css(first, ...interpolations)}
      }
    `
    return acc
  },
  {} as { [key in KeyOf<typeof sizes>]: MediaFunction }
)

export const mq = (query: string) => (first: any, ...args: any[]) =>
  css`@media screen and(${query}) {
    ${css(first, ...args)}
  }`

const _supports = (query: string) => (first: any, ...args: any[]) => css`
  @supports (${query}) {
    ${css(first, ...args)}
  }
`

const _notSupports = (query: string) => (first: any, ...args: any[]) => css`
  @supports not (${query}) {
    ${css(first, ...args)}
  }
`

export const supports = (query: string, not = false) =>
  not ? _notSupports(query) : _supports(query)

export const supportsVarFont = supports(`font-variation-settings: 'wdth' 115`)
export const notSupportsVarFont = supports(
  `font-variation-settings: 'wght' 115`,
  false
)
export const mqReducedMotion = mq('prefers-reduced-motion: reduce')
export const mqRetina = mq('min-resolution: 2ppx')
