export async function getStandaloneApolloClient() {
  const { ApolloClient, InMemoryCache, HttpLink } = await import(
    '@apollo/client'
  )
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://api.spacex.land/graphql/',
      fetch,
    }),
    cache: new InMemoryCache({
      typePolicies: {
        LaunchLink: {
          keyFields: ['mission_patch_small', 'video_link'],
        },
      },
    }),
  })
}
