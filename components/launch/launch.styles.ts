import styled, { css } from 'styled-components'
import ReactPlayer from 'react-player'
// import { Link } from 'react-router-dom'

import { Card, media } from 'styles'
import { mixins } from 'styles/mixins'
import { supportsVarFont } from 'styles'

export const Wrapper = styled.article<{ $color: string; $bg: string }>`
  --color: ${props => props.$color};
  --bg: ${props => props.$bg};
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  color: var(--grey10);

  > *:not(:last-child) {
    margin-bottom: 6rem;
  }
`

export const Header = styled.header`
  align-self: flex-start;
  width: 100%;
  padding: 1rem;
  border-radius: var(--rounded);
  border: 1pt solid var(--color);
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto;
  /* grid-template-areas:
    'title    title    badge'
    'details  details  badge'; */
  /* background-color: var(--successBg); */
  background-color: var(--bg);

  @supports (backdrop-filter: blur(10px)) {
    backdrop-filter: blur(3px);
    background-color: var(--bg);
  }

  > ul {
    /* grid-area: details; */

    /* Outside Grid Container */
    grid-column: 1 / span 1;
    grid-row: 2 / span 1;

    /* Inside Grid Container */
    /* display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, auto));
    grid-template-rows: auto;
    grid-auto-rows: auto; */

    /* &::nth-child(4) {
      grid-column: span 4;
    } */

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    column-gap: 1rem;

    /* li:not(:last-child) {
      margin-right: 10px;
    } */

    @media (max-width: 26.5em) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`

export const H1 = styled.h1`
  /* grid-area: title; */
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
  color: var(--color);

  span {
    --wght: 'wght' 670;
    --opsz: 'opsz' 20;
    color: var(--grey40);
  }

  ${media.small`
    font-size: clamp(2.8rem, 3vw, 3.3rem);
  `}/* @media (max-width: 26.5em) {
    font-size: clamp(2.8rem, 3vw, 3.3rem);
  } */
`

export const Badge = styled.img`
  /* grid-area: badge; */
  grid-column: 2 / span 1;
  grid-row: 1 / span 2;
  width: auto;
  max-width: 14rem;
  height: auto;
  align-self: flex-start; /* ? center */
  justify-self: flex-end;
  padding-left: 1rem;

  @media (max-width: 56em) {
    max-width: 10rem;
  }
`

export const SubTitle = styled.h3`
  color: var(--color);
  align-self: flex-start;
  justify-self: center;
`

export const Details = styled(Card)`
  flex-direction: column;
  flex-wrap: no-wrap;
`

export const UL = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;

  > li {
    &,
    > span {
      font-size: 1.7rem;
      font-family: var(--font-sans);
      ${supportsVarFont`
        --wght: 'wght' 520;
        font-family: var(--font-sys);
        font-variation-settings: var(--wght), var(--opsz), var(--grad), var(--yaxs);
      `}
    }
    span {
      text-transform: capitalize;
      color: var(--color);
      ${supportsVarFont`
        --wght: 'wght' 620;
      `}
    }
  }
`

export const VideoCard = styled(Card)`
  ${mixins.ratioBox(720, 1280)}
`

export const VideoPlayer = styled(ReactPlayer)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: var(--rounded);

  iframe {
    border-radius: var(--rounded);
  }
`

export const LaunchImageCard = styled(Card)`
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0;
  padding-top: 1rem;
  height: 100%;

  /* Subtitle */
  > *:first-child {
    width: 100%;
    text-align: center;
    margin-bottom: 1rem;
  }
`

export const RocketImg = styled.img`
  max-width: 100%;
  width: 100%;
  border-radius: var(--rounded);
  background-size: cover;
  height: auto;
`

// export const RocketImgLink = styled(Link)`
//   display: block;
//   margin: 0;
//   padding: 0;
//   line-height: 0;
// `

const cardStyles = css`
  flex-direction: row;
  flex-wrap: wrap;
  > *:first-child {
    width: 100%;
    text-align: center;
    margin-bottom: 1rem;
  }
  > ul {
    flex-direction: row;
    flex-wrap: wrap;
    li {
      width: 100%;
    }
    span {
      margin-right: 2px;
    }
  }
`

export const RocketDetails = styled(Card)`
  ${cardStyles};
`

export const PayloadDetails = styled(Card)`
  ${cardStyles};
  padding: 1rem;
`

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 1fr;
  column-gap: clamp(3rem, 4vw, 6rem);
  row-gap: 6rem;
  width: 100%;
  margin-right: 0;
  margin-left: 0;
  padding: 0;
`
