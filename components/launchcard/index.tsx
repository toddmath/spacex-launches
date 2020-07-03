import Link from 'next/link'
import Moment from 'react-moment'

import {
  Wrapper,
  Img,
  Badge,
  Header,
  H3,
  Content,
  Details,
  LinkIcon,
} from './launchcard.styles'
import { LaunchProps } from './types'
import { linkSync } from 'fs'

export default function LaunchCard({
  data: {
    id,
    mission_name,
    mission_id,
    launch_date_local,
    launch_success,
    details,
    links,
  },
}: LaunchProps) {
  const successText = launch_success ? 'Successfull Launch' : 'Launch Failure!!'
  const color = launch_success ? 'var(--success)' : 'var(--failure)'

  return (
    <Wrapper $color={color} whileHover={{ scale: 1.05 }}>
      <Badge>
        <Link href='/launch/[:id]' as={`/launch/${id}`}>
          <Img src={links.mission_patch_small ?? ''} loading='lazy' />
        </Link>
      </Badge>
      <Header>
        <H3>{mission_name}</H3>
        <h4>
          <Moment format='LLLL'>{launch_date_local}</Moment>
        </h4>
      </Header>
      <Content>
        <p>{details}</p>
      </Content>
      <Details>
        <Link href='/launch/[:id]' as={`/launch/${id}`}>
          <a>
            Details
            <LinkIcon />
          </a>
        </Link>
        <span>{successText}</span>
      </Details>
    </Wrapper>
  )
}
