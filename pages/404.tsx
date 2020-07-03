import Link from 'next/link'
import styled, { css } from 'styled-components'

import FullScreen from 'layout/fullscreen'
import { media } from 'styles'
import FourOFourSVG from 'components/svg/fourofour'
import RocketSVG from 'components/svg/rocket'
import MoonSVG from 'components/svg/moon'
import EarthSVG from 'components/svg/earth'
import AstronautSVG from 'components/svg/astronaut'

const rocketMovement = css`
  @keyframes rocket-movement {
    100% {
      transform: translate(1200px, -600px) scale(2);
    }
  }
`
const pulseEarth = css`
  @keyframes pulse-earth {
    50% {
      transform: scale(1.8);
    }
    100% {
      transform: scale(1.4);
    }
  }
`
const moveAstronaut = css`
  @keyframes move-astronaut {
    100% {
      -webkit-transform: translate(-160px, -160px);
      transform: translate(-160px, -160px);
    }
  }
`
const pulseAstronaut = css`
  @keyframes pulse-astronaut {
    50% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(1.4);
    }
  }
`
const rotateAstronaut = css`
  @keyframes rotate-astronaut {
    100% {
      -webkit-transform: rotate(-720deg);
      transform: rotate(-720deg);
    }
  }
`
const glowStar = css`
  @keyframes glow-star {
    40% {
      -webkit-opacity: 0.3;
      opacity: 0.3;
    }
    90%,
    100% {
      -webkit-opacity: 1;
      opacity: 1;
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
      border-radius: 999999px;
    }
  }
`

const goHomeBtn = css`
  position: relative;
  z-index: 200;
  margin: 15px auto;
  max-width: 300px;
  padding: 10px 15px;
  border: 1px solid var(--yellow);
  border-radius: 100px;
  font-weight: 400;
  display: block;
  color: white;
  text-align: center;
  text-decoration: none;
  letter-spacing: 2px;
  font-size: 11px;
  transition: all 0.3s ease-in;
  &:hover {
    background-color: var(--yellow);
    color: #fff;
    transform: scale(1.05);
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.1);
  }
`

const BgPurple = styled.main`
  --yellow: #ffcb39;
  ${rocketMovement};
  ${pulseEarth};
  ${moveAstronaut};
  ${pulseAstronaut};
  ${rotateAstronaut};
  ${glowStar};
  margin: 0;
  width: 100%;
  height: 100%;
  font-weight: 300;
  -webkit-user-select: none; /* Safari 3.1+ */
  -moz-user-select: none; /* Firefox 2+ */
  user-select: none; /* Standard syntax */
  /* background: url(/bg_purple.png); */
  /* background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%); */
  /* background-image: linear-gradient(to top, #5f72bd 0%, #9b23ea 100%); */

  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  /* background-image: linear-gradient(to top, #09203f 0%, #537895 100%); */
  /* background-image: linear-gradient(
    to top,
    #1e3c72 0%,
    #1e3c72 1%,
    #2a5298 100%
  ); */
  /* background-image: linear-gradient(
    -225deg,
    #3d4e81 0%,
    #5753c9 48%,
    #6e7ff3 100%
  ); */

  background-repeat: repeat-x;
  background-size: cover;
  background-position: left top;
  height: 100%;
  overflow: hidden;
  .btn-go-home {
    ${goHomeBtn};
  }
`

const CentralBody = styled.div`
  padding: 17% 5% 10% 5%;
  text-align: center;
  ${media.small`
    padding-top: 25%;
  `}
`

const Stars = styled.div`
  background: url(/overlay_stars.svg);
  background-repeat: repeat;
  background-size: contain;
  background-position: left top;
`

const GlowingStars = styled.div`
  & > .star {
    position: absolute;
    border-radius: 100%;
    background-color: #fff;
    width: 3px;
    height: 3px;
    opacity: 0.3;
    will-change: opacity;
  }
  & > .star:nth-child(1) {
    top: 80%;
    left: 25%;
    animation: glow-star 2s infinite ease-in-out alternate 1s;
  }
  & > .star:nth-child(2) {
    top: 20%;
    left: 40%;
    animation: glow-star 2s infinite ease-in-out alternate 3s;
  }
  & > .star:nth-child(3) {
    top: 25%;
    left: 25%;
    animation: glow-star 2s infinite ease-in-out alternate 5s;
  }
  & > .star:nth-child(4) {
    top: 75%;
    left: 80%;
    animation: glow-star 2s infinite ease-in-out alternate 7s;
  }
  & > .star:nth-child(5) {
    top: 90%;
    left: 50%;
    animation: glow-star 2s infinite ease-in-out alternate 9s;
  }
`

const Rocket = styled(RocketSVG)`
  width: clamp(40px, 3vw, 50px);
  z-index: 95;
  position: absolute;
  transform: translateX(-50px);
  top: 75%;
  pointer-events: none;
  animation: rocket-movement 200s linear infinite both running;
`

const Moon = styled(MoonSVG)`
  z-index: 90;
  pointer-events: none;
  width: 80px;
  position: absolute;
  top: 12%;
  left: 25%;
`

const Earth = styled(EarthSVG)`
  pointer-events: none;
  width: 100px;
  position: absolute;
  top: 20%;
  left: 15%;
  z-index: 90;
  animation: pulse-earth 20s infinite ease-in both alternate;
`

const FourOFour = styled(FourOFourSVG)`
  width: 300px;
  position: relative;
  z-index: 100;
  pointer-events: none;
  color: white;
  fill: currentColor;
`

const AstronautBox = styled.div`
  z-index: 110 !important;
  position: absolute;
  top: 60%;
  right: 20%;
  will-change: transform;
  animation: move-astronaut 50s infinite linear both alternate;
  ${media.small`
    top: 70%;
  `};
  & > div {
    width: 100%;
    height: 100%;
    animation: pulse-astronaut 100s infinite ease-in both alternate;
  }
`

const Astronaut = styled(AstronautSVG)`
  pointer-events: none;
  width: 140px;
  animation: rotate-astronaut 200s infinite linear both alternate;
`

export default function () {
  return (
    <FullScreen>
      <BgPurple className='bg-purple'>
        <Stars>
          <CentralBody>
            <FourOFour />
            <Link href='/'>
              <a className='btn-go-home'>GO BACK HOME</a>
            </Link>
          </CentralBody>

          <div>
            <Rocket />
            <div className='earth-moon'>
              <Earth />
              <Moon />
            </div>
            <AstronautBox>
              <div>
                <Astronaut />
              </div>
            </AstronautBox>
          </div>

          <GlowingStars>
            {Array.from({ length: 5 }, (_, i) => i).map(i => (
              <div key={`star-${i}`} className='star' />
            ))}
          </GlowingStars>
        </Stars>
      </BgPurple>
    </FullScreen>
  )
}
