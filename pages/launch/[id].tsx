import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

import ApolloError from 'components/debug-apollo'
import Launch from 'components/launch'
import Loading from 'components/loading'
import BasicLayout from 'layout/basic'
import {
  Launch as LaunchQueryProps,
  LaunchVariables,
} from 'graphql/types/Launch'
import { LAUNCH } from 'graphql/queries'

// export const getStaticPaths: GetStaticPaths = async () => {
//   const apolloClient = initializeApollo()
//   // await apolloClient.query({ query: LAUNCHES })

//   const {
//     data,
//     errors,
//     loading,
//   }: ApolloQueryResult<{
//     launches: Launches_launches[]
//   }> = await apolloClient.query({ query: LAUNCHES })

//   if (errors) {
//     console.error(errors)
//     throw new Error('Errors were detected in GraphQL query.')
//   }

//   const { launches } = data || {}

//   // const _launches = apolloClient.cache.extract()
//   const paths = launches.map(launch => ({
//     params: { id: launch.id },
//   }))

//   return {
//     paths,
//     fallback: false,
//   }
// }
// export const getStaticProps: GetStaticProps = async context => {
//   const apolloClient = initializeApollo()
//   const { id } = context.params
//   const _id = Array.isArray(id) ? id[0] : id

//   const {
//     data,
//     loading,
//     errors,
//   }: ApolloQueryResult<{ launch: Launch_launch }> = await apolloClient.query({
//     query: LAUNCH,
//     variables: { id: _id },
//   })

//   if (errors) {
//     console.error(errors)
//     throw new Error('Errors were detected in GraphQL query.')
//   }

//   return {
//     props: {
//       apolloState: apolloClient.cache.extract(),
//       launch: data.launch,
//     },
//   }

// await apolloClient.query({
//   query: LAUNCH,
//   variables: context.params.id,
// })
// const initialApolloState = apolloClient.cache.extract()
// return {
//   props: {
//     initialApolloState,
//   },
// }
// }

// interface Props {
//   launch: Launch_launch
// }

export default function () {
  const {
    query: { id },
  } = useRouter()
  const _id = Array.isArray(id) ? id[0] : id
  const { loading, error, data } = useQuery<LaunchQueryProps, LaunchVariables>(
    LAUNCH,
    { variables: { id: _id } }
  )

  if (loading) return <Loading />
  if (error) return <ApolloError error={error} />

  return (
    <BasicLayout home={false}>
      <Launch launch={data.launch} />
    </BasicLayout>
  )
}
