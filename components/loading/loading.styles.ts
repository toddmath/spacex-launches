import styled, { css } from 'styled-components'

// import { mixins } from 'styles'

const fumes = css`
  @keyframes fumes {
    50% {
      transform: scale(1.5);
      background-color: transparent;
    }
    51% {
      transform: scale(0.8);
    }
    100% {
      background-color: $white;
      transform: scale(1);
    }
  }
`
const bounce = css`
  @keyframes bounce {
    0% {
      transform: translate3d(0px, 0px, 0);
    }
    50% {
      transform: translate3d(0px, -4px, 0);
    }
    100% {
      transform: translate3d(0px, 0px, 0);
    }
  }
`
const exhaust = css`
  @keyframes exhaust {
    0% {
      background-image: var(--flamesGradientAlt);
    }
    50% {
      background-image: var(--flamesGradient);
    }
    75% {
      background-image: var(--flamesGradientAlt);
    }
  }
`
const fumes2 = css`
  @keyframes fumes2 {
    50% {
      transform: scale(1.1);
    }
  }
`
const twinkle = css`
  @keyframes twinkle {
    80% {
      transform: scale(1.1);
      opacity: 0.7;
    }
  }
`

export const Background = styled.main`
  --white: #f5f5f5;
  --lightgrey: #dadada;
  --midgrey: #b4b2b2;
  --darkgrey: #554842;
  --red: #f01a19;
  --darkred: #a75248;
  --rocketPrimary: var(--red);
  --rocketBody: linear-gradient(
    to top,
    var(--lightgrey) 0%,
    var(--lightgrey) 70%,
    var(--white) 100%
  );
  --flamesBG: #ff0000;
  --flamesBGAlt: #f9484a;
  --flamesGradient: linear-gradient(315deg, var(--flamesBG) 0%, #ffed00 74%);
  --flamesGradientAlt: linear-gradient(
    315deg,
    var(--flamesBGAlt) 0%,
    #fbd72b 94%
  );
  min-height: 100vh;
  /* background: linear-gradient(
    to bottom,
    var(--midgrey) 0%,
    var(--midgrey) 70%,
    var(--white) 100%
  ); */
  ${({ theme }) => theme.gradient.graphite}
  overflow: hidden;
`

export const Rocket = styled.div`
  ${fumes};
  ${bounce};
  ${exhaust};
  ${fumes2};
  ${twinkle};

  position: absolute;
  top: 20%;
  width: 80px;
  left: calc(50% - 60px);

  .exhaust-flame {
    position: absolute;
    top: 97%;
    width: 28px;
    background-color: var(--flamesBG);
    /* background-image: var(--flamesGradient); */
    ${({ theme }) => theme.gradient.orange}
    height: 150px;
    left: calc(50% - 14px);
    animation: exhaust 0.2s infinite;
  }
`

export const ExhaustFumes = styled.ul`
  & > li {
    width: 60px;
    height: 60px;
    background-color: var(--white);
    list-style: none;
    position: absolute;
    border-radius: 100%;

    &:first-child {
      width: 200px;
      height: 200px;
      bottom: -300px;
      animation: fumes 5s infinite;
    }

    &:nth-child(2) {
      width: 150px;
      height: 150px;
      left: -120px;
      top: 260px;
      animation: fumes 3.2s infinite;
    }

    &:nth-child(3) {
      width: 120px;
      height: 120px;
      left: -40px;
      top: 330px;
      animation: fumes 3s 1s infinite;
    }

    &:nth-child(4) {
      width: 100px;
      height: 100px;
      left: -170px;
      animation: fumes 4s 2s infinite;
      top: 380px;
    }

    &:nth-child(5) {
      width: 130px;
      height: 130px;
      left: -120px;
      top: 350px;
      animation: fumes 5s infinite;
    }

    &:nth-child(6) {
      width: 200px;
      height: 200px;
      left: -60px;
      top: 280px;
      animation: fumes2 10s infinite;
    }

    &:nth-child(7) {
      width: 100px;
      height: 100px;
      left: -100px;
      top: 320px;
    }

    &:nth-child(8) {
      width: 110px;
      height: 110px;
      left: 70px;
      top: 340px;
    }

    &:nth-child(9) {
      width: 90px;
      height: 90px;
      left: 200px;
      top: 380px;
      animation: fumes 20s infinite;
    }
  }
`

export const Stars = styled.ul`
  & > li {
    list-style: none;
    position: absolute;

    &::before,
    &::after {
      content: '';
      position: absolute;
      background-color: var(--white);
    }

    &::before {
      width: 10px;
      height: 2px;
      border-radius: 50%;
    }

    &::after {
      height: 8px;
      width: 2px;
      left: 4px;
      top: -3px;
    }

    &::first-child {
      top: -30px;
      left: -210px;
      animation: twinkle 0.4s infinite;
    }

    &:nth-child(2) {
      top: 0;
      left: 60px;
      animation: twinkle 0.5s infinite;

      &::before {
        height: 1px;
        width: 5px;
      }

      &::after {
        width: 1px;
        height: 5px;
        top: -2px;
        left: 2px;
      }
    }

    &:nth-child(3) {
      left: 120px;
      top: 220px;
      animation: twinkle 1s infinite;
    }

    &:nth-child(4) {
      left: -100px;
      top: 200px;
      animation: twinkle 0.5s ease infinite;
    }

    &:nth-child(5) {
      left: 170px;
      top: 100px;
      animation: twinkle 0.4s ease infinite;
    }

    &:nth-child(6) {
      top: 87px;
      left: -79px;
      animation: twinkle 0.2s infinite;

      &::before {
        height: 1px;
        width: 5px;
      }

      &::after {
        width: 1px;
        height: 5px;
        top: -2px;
        left: 2px;
      }
    }
  }
`

export const RocketBody = styled.div`
  width: 80px;
  left: calc(50% - 50px);
  animation: bounce 0.5s infinite;

  & > .body {
    background: var(--rocketBody);
    height: 180px;
    left: calc(50% - 50px);
    border-top-right-radius: 100%;
    border-top-left-radius: 100%;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    border-top: 5px solid var(--white);
  }

  & > .window {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: var(--darkred);
    left: calc(50% - 25px);
    top: 40px;
    border: 5px solid var(--midgrey);
  }

  & > .fin {
    position: absolute;
    z-index: -100;
    height: 55px;
    width: 50px;
    background-color: var(--rocketPrimary);
  }

  & > .fin-left {
    left: -30px;
    top: calc(100% - 55px);
    border-top-left-radius: 80%;
    border-bottom-left-radius: 20%;
  }

  & > .fin-right {
    right: -30px;
    top: calc(100% - 55px);
    border-top-right-radius: 80%;
    border-bottom-right-radius: 20%;
  }

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 24px);
    width: 48px;
    height: 13px;
    background-color: var(--lightgrey);
    bottom: -13px;
    border-bottom-right-radius: 60%;
    border-bottom-left-radius: 60%;
  }
`
