import { useEffect } from 'react'
import { ApolloError } from '@apollo/client'

interface Props {
  error: ApolloError
}

export default function ({ error }: Props) {
  useEffect(() => {
    console.debug(error)
  }, [error])

  return (
    <div>
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </div>
  )
}
