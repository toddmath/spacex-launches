import { ApolloProvider } from '@apollo/client'
import { AppProps } from 'next/app'
import Router from 'next/router'
import { ThemeProvider } from 'styled-components'
import NProgress from 'nprogress'
// import withApollo from 'next-with-apollo'
// import { useEffect } from 'react'

import ThemeModeProvider, { useThemeMode } from '../context/theme.context'
import { useApollo } from 'lib/withApollo'
import { theme } from 'styles/theme'

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

// type Props = AppProps & WithApolloProps<any>
// interface Props extends AppProps {
//   apollo: ApolloClient<ApolloClient<NormalizedCacheObject>>
// }

interface ThemeProps {
  children?: NonNullable<React.ReactNode>
}

// const ThemeModeApp = ({ children }: ThemeProps) => {
//   return <ThemeModeProvider>{children}</ThemeModeProvider>
// }

const ThemedApp = ({ children }: ThemeProps) => {
  const [mode, _] = useThemeMode()

  return <ThemeProvider theme={theme[mode]}>{children}</ThemeProvider>
}

function App({ Component, pageProps }: AppProps): JSX.Element {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeModeProvider>
        <ThemedApp>
          <Component {...pageProps} />
        </ThemedApp>
      </ThemeModeProvider>
    </ApolloProvider>
  )
}

export default App

// const link = new HttpLink({
//   uri: 'https://api.spacex.land/graphql/',
// })
// export default withApollo(({ initialState }) => {
//   return new ApolloClient({
//     cache: new InMemoryCache({
//       typePolicies: {
//         LaunchLink: {
//           keyFields: ['mission_patch_small', 'video_link'],
//         },
//       },
//     }).restore(initialState || {}),
//     link,
//   })
// })(App)
