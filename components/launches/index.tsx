import styled from 'styled-components'
import LaunchCard from '../launchcard'
import { Launches_launches } from 'graphql/types/Launches'
import { Launch_launch } from 'graphql/types/Launch'

const Grid = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-template-rows: auto;
  grid-auto-rows: auto;
  column-gap: 3rem;
  row-gap: 4rem;
  perspective: 60rem;
`

interface Props {
  launches: Launches_launches[]
}

export default function Launches({ launches }: Props) {
  return (
    <Grid>
      {launches.map(launch => (
        <LaunchCard key={launch.id} data={launch} />
      ))}
    </Grid>
  )
}
