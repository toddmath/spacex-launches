import { css } from 'styled-components'

interface ShadowProps {
  precision?: number
  size?: number
  color?: string
}

/**
 * Helper function to create CSS text shadow value with given params.
 * @param {{ precision?: number, size?: number, color?: string }} options Optional options
 */
const textShadow = ({
  precision = 0.25,
  size = 6,
  color = 'var(--txShadow)',
}: ShadowProps = {}) => {
  let offset = 0
  let length = size * (1 / precision) - 1

  return Array.from({ length }, () => {
    offset += precision
    return `${offset}px ${offset}px ${color}`
  }).join()
}

export const mixins = {
  bgFilter: css`
    --blend-top: exclusion;
    --blend-bottom: color;
    --blend-img: multiply;
    --colorBg1: var(--royal);
    --colorBg2: var(--navy);
    background: radial-gradient(circle, transparent 40%, var(--colorBg2) 75%),
      linear-gradient(to right, var(--colorBg1), var(--colorBg1)), var(--image);
    background-position: center center;
    background-size: cover;
    background-blend-mode: var(--blend-top, exclusion),
      var(--blend-bottom, color), var(--blend-img);
    background-attachment: fixed;
    flex: 1;
    width: 100vw;
  `,
  textShadow: css`
    --txColor: var(--royal);
    --txShadow: var(--orange60);
    color: var(--txColor);
    text-shadow: ${textShadow()};
  `,
  clearFix: css`
    display: block;
    position: relative;
    &::before {
      content: '';
    }
    &::after {
      content: '';
      display: table;
      clear: both;
    }
  `,
  ratioBox: (w = 720, h = 1280) => css`
    display: block;
    position: relative;
    padding: 0;
    width: 100%;
    ${'' /* max-width: ${w}px; */}
    &::before {
      content: '';
      width: 1px;
      margin-left: -1px;
      float: left;
      height: 0;
      padding-top: calc(${w} / ${h} * 100%);
    }
    &::after {
      content: '';
      display: table;
      clear: both;
    }
  `,
  linkUnderline: (color: string | null) => css`
    position: relative;
    /* right: 30px;
    bottom: 31px; */
    /* font-size: 0.8125em; */
    text-decoration: none;
    color: ${({ theme }) => (color ? color : theme.text)};
    /* letter-spacing: 0.03em; */
    cursor: pointer;

    margin: 0;
    padding: 0;
    border: none;
    background: none;

    &::before,
    &::after {
      display: inline-block;
      content: '';
      width: 13%;
      position: absolute;
      left: 0;
      bottom: -2px;
      height: 1px;
      transition: opacity 0.25s ease, transform 0.25s ease,
        width 0.3s cubic-bezier(0.68, 0.05, 0.46, 1.02), left 0.2s 0.2s ease-out;
    }
    &::after {
      z-index: 10;
      width: 30%;
      background-color: ${({ theme }) => (color ? color : theme.text)};
      /* opacity: 0; */
      opacity: 0.5;
    }
    /* &:hover &::after {
      opacity: 1;
      left: 100%;
    }
    &:hover &::before {
      width: 100%;
    } */
    &:hover {
      &::after {
        opacity: 1;
        /* left: 100%; */
        width: 80%;
        /* width: auto; */
      }
      &::before {
        width: 100%;
      }
    }
  `,
}
