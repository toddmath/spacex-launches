// import withApollo from 'next-with-apollo'
import { useMemo } from 'react'
// import { InitApolloOptions } from 'next-with-apollo'
// import { WithApolloState } from 'next-with-apollo/lib/types'
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import { DocumentContext } from 'next/document'
import { AppContext, AppProps, AppInitialProps } from 'next/app'
import {
  AppContextType,
  NextComponentType,
  NextPageContext,
} from 'next/dist/next-server/lib/utils'
import App from 'next/app'
import Head from 'next/head'
import React, { ReactNode } from 'react'

declare function appGetInitialProps({
  Component,
  ctx,
}: AppContext): Promise<AppInitialProps>

// XXX Inspired by https://github.com/vercel/next.js/blob/canary/examples/with-apollo/lib/apollo.js
// On the client, we store the Apollo Client in the following variable.
// This prevents the client from reinitializing between page transitions.
let globalApolloClient: ApolloClient<NormalizedCacheObject> = null

// type initOnContextProps = {
//   ctx: NextPageContext
//   apolloClient?: ApolloClient<NormalizedCacheObject>
//   apolloState?: WithApolloState<NormalizedCacheObject>
// }

/**
 * Options of the withApollo HOC
 */
// type withApolloOptions = {
//   useGetInitialProps?: boolean // If set to true, will inject "getInitialProps" into the page and will use SSR mode
// }

/**
 * Injected by HOC "withApollo" into the page
 */
// type PageProps = {
//   apolloState?: WithApolloState<NormalizedCacheObject>
//   apolloClient?: ApolloClient<NormalizedCacheObject>
//   isReadyToRender: boolean
// }

// function initApolloClient(initialState: NormalizedCacheObject) {
//   if (!globalApolloClient) {
//     globalApolloClient = new ApolloClient({
//       ssrMode: typeof window === 'undefined',
//       link: new HttpLink({
//         uri: 'https://api.spacex.land/graphql/',
//         fetch,
//       }),
//       cache: new InMemoryCache().restore(initialState || {}),
//     })
//   }
//   // client side page transition to an SSG page => update Apollo cache
//   else if (initialState) {
//     globalApolloClient.cache.restore({
//       ...globalApolloClient.cache.extract(),
//       ...initialState,
//     })
//   }
//   return globalApolloClient
// }

// * Was working
export function createApolloClient(
  initialState = {}
): ApolloClient<NormalizedCacheObject> {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: 'https://api.spacex.land/graphql/', // Server URL (must be absolute)
      credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
      fetch,
    }),
    cache: new InMemoryCache({
      typePolicies: {
        LaunchLink: {
          keyFields: ['mission_patch_small', 'video_link'],
        },
        Launches: {
          fields: {
            mission_id: {
              read(existing: string | string[]) {
                return Array.isArray(existing) ? existing[0] : existing
              },
            },
          },
        },
        Launch: {
          keyFields: ['id'],
        },
        Query: {
          fields: {
            Launch: {
              keyArgs: ['id'],
            },
          },
        },
      },
    }).restore(initialState || {}),
  })
}

// * Was  working
export function initializeApollo(initialState = null, ctx = undefined) {
  const _apolloClient = globalApolloClient ?? createApolloClient()
  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState)
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient
  // Create the Apollo Client once in the client
  if (!globalApolloClient) globalApolloClient = _apolloClient

  return _apolloClient
}

export function useApollo(initialState: any) {
  const store = useMemo(() => initializeApollo(initialState, undefined), [
    initialState,
  ])
  return store
}

// export function withApollo(PageComponent: NextComponentType) {
//   const WithApollo = ({
//     apolloStaticCache,
//     ...pageProps
//   }: {
//     apolloStaticCache: NormalizedCacheObject
//   }) => {
//     // HERE WE USE THE PASSED CACHE
//     const client = initApolloClient(apolloStaticCache)
//     // and here we have the initialized client 🙂
//     return (
//       <ApolloProvider client={client}>
//         <PageComponent {...pageProps} />
//       </ApolloProvider>
//     )
//   }
//   // if you also use it for SSR
//   if (PageComponent.getInitialProps) {
//     WithApollo.getInitialProps = async (ctx: NextPageContext) => {
//       // Run wrapped getInitialProps methods
//       let pageProps = {}
//       if (PageComponent.getInitialProps) {
//         pageProps = await PageComponent.getInitialProps(ctx)
//       }
//       return pageProps as typeof appGetInitialProps
//     }
//   }

//   // Set the correct displayName in development
//   if (process.env.NODE_ENV !== 'production') {
//     const displayName =
//       PageComponent.displayName || PageComponent.name || 'Component'

//     WithApollo.displayName = `withApollo(${displayName})`
//   }
//   return WithApollo
// }

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
// })
