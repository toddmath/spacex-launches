import Head from 'next/head'
import Link from 'next/link'

import { GlobalStyle } from 'styles'
import { CONFIG } from 'config'

// const name = 'Todd Matheson'
// export const siteTitle = '🚀 SpaceX'

interface Props {
  children: React.ReactNode
  home?: boolean
}

export default function BasicLayout({ children, home }: Props) {
  return (
    <div className='container'>
      <Head>
        <link rel='shortcut icon' href='/favicon.ico' />
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
      <header className='header'>
        {home ? (
          <>
            <h1 className='heading--xxl'>{CONFIG.APP_NAME}</h1>
          </>
        ) : (
          <>
            <h2 className='heading--xl'>
              <Link href='/'>
                <a className='color--inherit'>{CONFIG.APP_NAME}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
    </div>
  )
}
