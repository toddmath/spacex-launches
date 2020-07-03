import Link from 'next/link'
import { useQuery } from '@apollo/client'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link as IconLink } from '@styled-icons/feather/Link'
import Moment from 'react-moment'

import { LAUNCHES, LAUNCH } from 'graphql/queries'
import {
  Launches as LaunchesQuery,
  LaunchesVariables,
} from 'graphql/types/Launches'
import { LaunchVariables } from 'graphql/types/Launch'
import BasicLayout from 'layout/basic'
import ApolloError from 'components/debug-apollo'
import Loading from 'components/loading'
import { mixins } from 'styles'
// import Launches from 'components/launches'

const Grid = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-template-rows: auto;
  grid-auto-rows: auto;
  column-gap: 6rem;
  row-gap: 5rem;
  perspective: 60rem;
`
/*   ${props =>
    props.$success ? props.theme.gradient.forrest : props.theme.gradient.orange} */
const LaunchCard = styled(motion.article)<{
  $color: string
  $success: boolean
}>`
  --color: ${props => props.$color};
  --verticalGap: 1.5rem;
  --horizontalGap: 1.5rem;
  --bg: ${props => props.theme.backgroundVariant};
  background: var(--bg);
  margin: 0;
  padding: 2rem;
  width: 100%;
  height: 100%;
  display: grid;
  column-gap: var(--verticalGap);
  row-gap: var(--horizontalGap);
  border: 2px solid var(--color);
  border-radius: var(--rounded);
  /* grid-template-areas:
    'img       title     title     title'
    'desc      desc      desc      desc'
    'footer    footer    footer    footer'; */
  grid-template-columns: 128px 1fr;
  grid-template-rows: 128px 1fr;
  grid-auto-rows: auto;
  align-content: start;
  box-shadow: 0 6px 15px rgba(36, 37, 38, 0.08);
`
const Badge = styled.div`
  /* grid-area: img; */
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
  cursor: pointer;
`
const Img = styled.img`
  max-width: 100%;
  width: 128px;
  height: auto;
  display: block;
  border-top-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
`
const H3 = styled.h3`
  --grad: 'GRAD' 610;
  grid-area: header;
  font-weight: 600;
  line-height: 1.2;
  margin: 0;
  padding: 0;
  /* padding: 1rem 0 0 0; */
`
const Header = styled.header`
  /* grid-area: title; */
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;
  display: grid;
  grid-template-areas:
    'title'
    'date';
  align-items: center;
  > ${H3} {
    grid-area: title;
  }
  > h4,
  > time {
    grid-area: date;
    font-weight: 400;
    padding: 0;
  }
`
const Content = styled.div`
  /* grid-area: desc; */
  --fontSize: 1.6rem;
  --lines: 3;
  --lineHeight: 1.5;
  --height: calc((var(--lines) * var(--lineHeight)) * var(--fontSize));
  /* --bg: rgba(255, 255, 255, 1); */
  /* --height: 7.2rem; */
  grid-column: 1 / -1;
  grid-row: 2 / span 1;
  line-height: var(--lineHeight);
  margin: 0;
  height: var(--height);
  overflow: hidden;
  & > p {
    font-size: var(--fontSize);
    line-height: var(--lineHeight);
    margin: 0;
    height: var(--height);
    overflow: hidden;
  }
  position: relative;
  &::after {
    content: '';
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 40%;
    /* height: 2.4rem; */
    height: calc(var(--height) / var(--lines));
    background-image: ${({ theme }) =>
      `linear-gradient(to right, ${theme.bgVarAlpha(0)}, ${theme.bgVarAlpha(
        0.9
      )} 85%, ${theme.bgVarAlpha(0.9)} 89%, var(--bg) 90%)`};
    /* background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.9) 85%,
      rgba(255, 255, 255, 0.9) 89%,
      var(--bg) 90%
    ); */
  }
`
const Details = styled.footer`
  /* grid-area: footer; */
  grid-column: 1 / -1;
  /* grid-row: 3 / span 1; */
  grid-row-end: span 1;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  & > a {
    color: var(--color);
    line-height: 1;
    display: inline-block;
    ${mixins.linkUnderline('var(--color)')};
  }

  & > span {
    color: var(--color);
    text-transform: uppercase;
  }
`
const LinkIcon = styled(IconLink)`
  margin-left: 4px;
  width: 2rem;
  height: 2rem;
`

export default function Home() {
  const { loading, error, data, client } = useQuery<
    LaunchesQuery,
    LaunchesVariables
  >(LAUNCHES)

  if (loading) return <Loading />
  if (error) return <ApolloError error={error} />

  return (
    <BasicLayout home>
      <Grid>
        {data.launches.map(
          ({
            id,
            mission_name,
            launch_date_local,
            launch_success,
            details,
            links,
          }) => (
            <LaunchCard
              key={`Launch-${id}`}
              $success={launch_success}
              $color={launch_success ? 'var(--success)' : 'var(--failure)'}
              whileHover={{ scale: 1.05 }}
              onMouseOver={() => {
                client.query({
                  query: LAUNCH,
                  variables: { id },
                })
              }}
            >
              <Badge>
                <Link href='/launch/[:id]' as={`/launch/${id}`}>
                  <Img src={links.mission_patch_small} loading='lazy' />
                </Link>
              </Badge>
              <Header>
                <H3>{mission_name}</H3>
                {/* <h4> */}
                <Moment format='LLL'>{launch_date_local}</Moment>
                {/* </h4> */}
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
                <span>
                  {launch_success ? 'Successfull Launch' : 'Launch Failure!!'}
                </span>
              </Details>
            </LaunchCard>
          )
        )}
      </Grid>
      {/* <Launches launches={data.launches} /> */}
    </BasicLayout>
  )
}
