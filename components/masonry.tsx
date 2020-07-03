import { Masonry as Mason } from 'masonic'
import { useQuery } from '@apollo/client'

import LaunchCard from './launchcard'
import Loading from './loading'
import { LAUNCHES } from 'graphql/queries'
import { Launches, LaunchesVariables } from 'graphql/types/Launches'

// type LaunchItems = NonNullable<Launches_launches>

const handleColumns = (contWidth = 900, cols = 2, gap = 40) => {
  const totalGap = (cols - 1) * gap
  const colWidth = (contWidth - totalGap) / cols
  return Math.floor(colWidth)
}

export default function Masonry() {
  const { loading, error, data } = useQuery<Launches, LaunchesVariables>(
    LAUNCHES
  )
  const colWidth = handleColumns()

  if (loading) return <Loading />
  if (error) return <div>Error fetching launches: {error.message}</div>

  return (
    <Mason
      // This contains the data for our grid items
      items={data.launches}
      // Adds 8px of space between the grid cells
      columnGutter={40}
      // Sets the minimum column width to 172px
      columnWidth={colWidth}
      // Pre-renders 5 windows worth of content
      overscanBy={3}
      render={LaunchCard}
      scrollFps={30}
    />
  )
}
