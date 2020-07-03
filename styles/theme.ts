import { css, FlattenSimpleInterpolation } from 'styled-components'

interface Gradient {
  readonly [key: string]: FlattenSimpleInterpolation
}

/** @see {@link https://webgradients.com} */
const gradient: Gradient = {
  green: css`
    background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
  `,
  neonGreen: css`
    background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);
  `,
  forrest: css`
    background-image: linear-gradient(to top, #0ba360 0%, #3cba92 100%);
  `,
  neonBlue: css`
    background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
  `,
  babyBlue: css`
    background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
  `,
  orange: css`
    background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  `,
  purple: css`
    background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
  `,
  darkPurple: css`
    background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  `,
  graphite: css`
    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.15) 0%,
        rgba(0, 0, 0, 0.15) 100%
      ),
      radial-gradient(
          at top center,
          rgba(255, 255, 255, 0.4) 0%,
          rgba(0, 0, 0, 0.4) 120%
        )
        #989898;
    background-blend-mode: multiply, multiply;
  `,
}

const lightTheme = {
  primary: 'rgba(215,113,88,1)',
  header: 'rgba(58,52,51,1)',
  text: 'hsl(0, 0%, 13%)',
  textSecondary: 'rgba(58,52,51,0.7)',
  background: 'rgba(255,255,255,1)',
  backgroundVariant: 'rgba(251,249,249,1)',
  bgAlpha: (opacity: string | number) => `rgba(255,255,255, ${opacity})`,
  bgVarAlpha: (opacity: string | number) => `rgba(251,249,249, ${opacity})`,
  border: 'rgba(58,52,51,0.12)',
  borderLight: 'rgba(58,52,51,0.05)',
  success: 'hsl(151, 83%, 34%)',
  failure: 'hsl(4, 90%, 58%)',
  gradient,
}

const darkTheme: Theme = {
  primary: 'rgba(220,120,95,1)',
  header: 'hsl(0, 0%, 93%)',
  text: 'rgba(241,233,231,1)',
  textSecondary: 'rgba(241,233,231,0.6)',
  background: 'rgba(0,0,0,1)',
  backgroundVariant: 'rgba(28,26,26,1)',
  bgAlpha: (opacity: string | number) => `rgba(0,0,0,${opacity})`,
  bgVarAlpha: (opacity: string | number) => `rgba(28,26,26,${opacity})`,
  border: 'rgba(241,233,231,0.15)',
  borderLight: 'rgba(241,233,231,0.05)',
  success: 'hsl(151, 83%, 34%)',
  failure: 'hsl(4, 90%, 58%)',
  gradient,
}

export type Theme = typeof lightTheme

export const theme = {
  light: lightTheme,
  dark: darkTheme,
} as const
