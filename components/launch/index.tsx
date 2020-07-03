import { useState } from 'react'
// import Gallery from 'react-photo-gallery'

import { Launch as LaunchQueryProps } from 'graphql/types/Launch'
// import { RocketImgMasonry } from 'components'
// import { Gallery } from 'components'
// import Payload from 'components/Payload/Payload'
import {
  Wrapper,
  Header,
  H1,
  Badge,
  SubTitle,
  VideoCard,
  VideoPlayer,
  UL,
  LaunchImageCard,
  RocketDetails,
  CardGrid,
} from './launch.styles'

const isNavigator = typeof navigator !== 'undefined'
const lang = isNavigator ? navigator.language : 'en'

const formatMoney = (data: number) =>
  new Intl.NumberFormat(lang, {
    style: 'currency',
    currency: 'USD',
  }).format(data)

function randomImg(imgs: string[]) {
  return imgs[~~(Math.random() * imgs.length)]
}

// function columns(containerWidth) {
//   let columns = 1
//   if (containerWidth >= 500) columns = 1
//   if (containerWidth >= 900) columns = 2
//   if (containerWidth >= 1500) columns = 3
//   return columns
// }

function parseId(data: string[] | string): string {
  return Array.isArray(data) ? data[0] : data
}

export default function Launch({ launch }: LaunchQueryProps) {
  const [imgs, setImgs] = useState([])

  const success = launch.launch_success
  const { launch_site: site } = launch
  const color = success ? 'var(--success)' : 'var(--failure)'
  // const background = success ? 'var(--successBg)' : 'var(--failureBg)'
  const background = 'var(--cardBg)'
  // const rocketImgs = launch.links.flickr_images.map((img, i) => ({
  //   id: nanoid(),
  //   src: img,
  // }))
  const { rocket } = launch
  const rocketName = rocket.rocket_name || rocket.rocket.id
  const { second_stage } = rocket
  // const { payloads } = second_stage

  const details = {
    success: String(success),
    id: launch.id,
    year: launch.launch_year,
    site: site.site_name_long,
    rocket: rocketName,
  }

  const rocketDetails = [
    ['Rocket Used', rocketName],
    ['Cost per launch', formatMoney(rocket.rocket.cost_per_launch)],
    ['Description', rocket.rocket.description],
  ]

  // const payloadDetails = [
  //   ['Customer', secondStage.payloads.customers[0]],
  //   ['Manufacturer', secondStage.payloads.manufacturer],
  //   ['Nationality', secondStage.payloads.nationality],
  //   ['Type', ]
  // ]

  // console.log(launch)

  return (
    <Wrapper $color={color} $bg={background}>
      <Header>
        <H1>
          <span>Mission: </span>
          {launch.mission_name}
        </H1>
        <UL>
          {Object.entries(details).map(([k, v]) => (
            <li key={k}>
              <span>{k}:&nbsp;</span>
              {v}
            </li>
          ))}
        </UL>
        <Badge src={launch.links.mission_patch_small} />
      </Header>

      <VideoCard>
        <VideoPlayer
          url={launch.links.video_link}
          controls
          pip
          width='100%'
          height='100%'
          config={{
            youtube: {
              preload: true,
              embedOptions: {
                colors: 'white',
              },
            },
          }}
        />
      </VideoCard>

      <CardGrid>
        <RocketDetails>
          <SubTitle>Rocket Details</SubTitle>
          <UL>
            {rocketDetails.map(([k, v]) => (
              <li key={k}>
                <span>{k}:&nbsp;</span>
                {v}
              </li>
            ))}
          </UL>
        </RocketDetails>

        {/* {payloads.map((payload, i) => (
          <Payload
            key={`Payload-#${i}`}
            success={success}
            title={payloads.length === 1 ? 'Payload' : `Payload ${i + 1}`}
            payload={payload}
          />
        ))} */}
      </CardGrid>

      {imgs.length && (
        <LaunchImageCard>
          <SubTitle>Launch Images</SubTitle>
          {/* <Gallery
            direction='row'
            photos={imgs}
            targetRowHeight={400}
            margin={10}
          /> */}
          {/* <RocketImgMasonry imgs={imgs} /> */}
        </LaunchImageCard>
      )}
    </Wrapper>
  )
}
