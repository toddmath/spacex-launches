import Head from 'next/head'

import { GlobalStyle } from 'styles'
import { CONFIG } from 'config'

// const name = 'Todd Matheson'
// export const siteTitle = '🚀 SpaceX - Page Not Found'

export default function ({ children }) {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <link rel='manifest' href='/manifest.json' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover'
        />
        <meta name='description' content={CONFIG.APP_DESCRIPTION} />
        <meta name='theme-color' content={CONFIG.THEME_COLOR} />
        <meta name='application-name' content={CONFIG.APP_NAME} />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content={CONFIG.APP_NAME} />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta property='og:image' content='/icons/icon-512x512.png' />
        <meta name='og:title' content={CONFIG.APP_NAME} />
        <meta name='twitter:card' content='summary_large_image' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/icons/apple-touch-icon.png'
        />
      </Head>
      <GlobalStyle />
      {children}
    </>
  )
}
