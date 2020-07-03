import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

import { supportsVarFont, media, mq } from './media'
import nprogressCss from './nprogress'

const GlobalStyle = createGlobalStyle`
  ${normalize};

  :root {
    /* Colors */
    --red40: hsl(1, 83%, 63%);
    --red50: hsl(4, 90%, 58%);
    --red60: hsl(1, 77%, 55%);
    --red70: hsl(0, 65%, 51%);
    --red80: hsl(0, 66%, 47%);
    --red90: hsl(0, 73%, 41%);
    --redA20: hsl(0, 100%, 66%);
    --redA40: hsl(348, 100%, 55%);
    --redA70: hsl(0, 100%, 42%);

    --pink40: hsl(340, 82%, 59%);
    --pink50: hsl(340, 82%, 52%);
    --pink60: hsl(338, 78%, 48%);
    --pink70: hsl(336, 78%, 43%);
    --pink80: hsl(334, 79%, 38%);
    --pink90: hsl(328, 81%, 29%);
    --pinkA20: hsl(340, 100%, 63%);
    --pinkA40: hsl(339, 100%, 48%);
    --pinkA70: hsl(333, 84%, 42%);

    --purple40: hsl(291, 47%, 51%);
    --purple50: hsl(291, 64%, 42%);
    --purple60: hsl(287, 65%, 40%);
    --purple70: hsl(282, 68%, 38%);
    --purple80: hsl(277, 70%, 35%);
    --purple90: hsl(267, 75%, 31%);
    --purpleA20: hsl(291, 96%, 62%);
    --purpleA40: hsl(291, 100%, 49%);
    --purpleA70: hsl(280, 100%, 50%);

    --deepPurple40: hsl(262, 47%, 55%);
    --deepPurple50: hsl(262, 52%, 47%);
    --deepPurple60: hsl(260, 54%, 45%);
    --deepPurple70: hsl(258, 58%, 42%);
    --deepPurple80: hsl(255, 61%, 39%);
    --deepPurple90: hsl(251, 69%, 34%);
    --deepPurpleA20: hsl(256, 100%, 65%);
    --deepPurpleA40: hsl(259, 100%, 56%);
    --deepPurpleA70: hsl(265, 100%, 46%);

    --indigo40: hsl(231, 44%, 56%);
    --indigo50: hsl(231, 48%, 48%);
    --indigo60: hsl(232, 50%, 45%);
    --indigo70: hsl(232, 54%, 41%);
    --indigo80: hsl(233, 57%, 37%);
    --indigo90: hsl(235, 66%, 30%);
    --indigoA20: hsl(231, 99%, 66%);
    --indigoA40: hsl(231, 99%, 62%);
    --indigoA70: hsl(231, 99%, 59%);

    --blue40: hsl(207, 90%, 61%);
    --blue50: hsl(207, 90%, 54%);
    --blue60: hsl(208, 79%, 51%);
    --blue70: hsl(210, 79%, 46%);
    --blue80: hsl(212, 80%, 42%);
    --blue90: hsl(216, 85%, 34%);
    --blueA20: hsl(218, 100%, 63%);
    --blueA40: hsl(218, 100%, 58%);
    --blueA70: hsl(224, 100%, 58%);

    --royal40: hsl(199, 92%, 56%);
    --royal50: hsl(199, 98%, 48%);
    --royal60: hsl(200, 97%, 45%);
    --royal70: hsl(201, 98%, 41%);
    --royal80: hsl(202, 98%, 37%);
    --royal90: hsl(206, 99%, 31%);
    --royalA20: hsl(199, 100%, 63%);
    --royalA40: hsl(199, 100%, 50%);
    --royalA70: hsl(203, 100%, 46%);

    --cyan40: hsl(187, 71%, 50%);
    --cyan50: hsl(187, 100%, 42%);
    --cyan60: hsl(187, 100%, 38%);
    --cyan70: hsl(186, 100%, 33%);
    --cyan80: hsl(185, 100%, 28%);
    --cyan90: hsl(182, 100%, 20%);
    --cyanA20: hsl(180, 100%, 55%);
    --cyanA40: hsl(186, 100%, 50%);
    --cyanA70: hsl(188, 100%, 42%);

    --teal40: hsl(174, 63%, 40%);
    --teal50: hsl(174, 100%, 29%);
    --teal60: hsl(174, 100%, 27%);
    --teal70: hsl(173, 100%, 24%);
    --teal80: hsl(173, 100%, 21%);
    --tealA20: hsl(166, 100%, 70%);
    --tealA40: hsl(165, 82%, 51%);
    --tealA70: hsl(172, 100%, 37%);

    --orange40: hsl(36, 100%, 57%);
    --orange50: hsl(36, 100%, 50%);
    --orange60: hsl(33, 100%, 49%);
    --orange70: hsl(30, 100%, 48%);
    --orange80: hsl(27, 100%, 47%);
    --orangeA20: hsl(34, 100%, 63%);
    --orangeA40: hsl(34, 100%, 50%);
    --orangeA70: hsl(26, 100%, 50%);

    --grey10: hsl(0, 0%, 96%);
    --grey20: hsl(0, 0%, 93%);
    --grey30: hsl(0, 0%, 88%);
    --grey40: hsl(0, 0%,  74%);
    --grey50: hsl(0, 0%, 62%);
    --grey60: hsl(0, 0%, 46%);
    --grey70: hsl(0, 0%, 38%);
    --grey80: hsl(0, 0%, 26%);
    --grey90: hsl(0, 0%, 13%);

    --bGrey10: hsl(198, 16%, 84%);
    --bGrey20: hsl(200, 15%, 73%);
    --bGrey30: hsl(200, 16%, 62%);
    --bGrey40: hsl(200, 15%, 54%);
    --bGrey50: hsl(200, 18%, 46%);
    --bGrey60: hsl(199, 18%, 40%);
    --bGrey70: hsl(199, 18%, 33%);
    --bGrey80: hsl(200, 18%, 26%);
    --bGrey90: hsl(200, 19%, 18%);

    /* Main Colors */
    --neonGreen: hsl(167, 98%, 39%);
    --green: hsl(151, 83%, 34%);
    --teal: var(--teal50);
    ${'' /* --royal: hsl(203, 89%, 53%); */}
    ${'' /* --navy: hsl(221, 44%, 41%); */}
    --royal: var(--royal60);
    --navy: var(--indigo50);
    --orange: hsl(27, 90%, 55%);
    --yellow: hsl(44, 100%, 48%);
    --magenta: hsl(335, 80%, 38%);
    --red: hsl(351, 100%, 45%);


    /* Theme Colors */
    --bg: var(--grey10);
    --failure: var(--red50);
    --success: var(--neonGreen);
    --successBg: hsla(167,98%,39%, 0.6);
    --failureBg: hsla(0, 100%, 42%, 0.5);
    --cardBg: hsla(0, 0%, 13%, 0.75);
    --warning: var(--orange);
    --muted: var(--grey70);
    --title: hsl(207, 95%, 8%);
    --primary: 0;
    --secondary: 0;
    --info: var(--muted);
    --danger: var(--red);
    --light: 0;
    --dark: 0;
    --font-sys: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --font-sans: 'Nunito', sans-serif;
    --font-mono: 'Roboto Mono', monospace;
    --font-title: 'Roboto Condensed', sans-serif;

    /* BreakPoints */
    --bp-xs: 0;
    --bp-sm: 576;    /* 576px - 36em */
    --bp-md: 768;    /* 768px - 48em */
    --bp-lg: 992;    /* 992px - 62em */
    --bp-xl: 1200;    /* 1200px - 75em */
    --breakpoint-xs: 0;
    --breakpoint-s: 48em;      /* 767px */
    --breakpoint-m: 72em;      /* 1151px */
    --breakpoint-l: 105em;     /* 1679px */
    --breakpoint-xl: 120em;    /* 1919px */

    /* Misc */
    --rounded: 0.5em;
    --bgAnim: bgFilter 5s infinte;

    /*
      VARIABLE FONT
      --wght     'wght'    0-900       weight
      --opsz:    'opsz'    19-20       optical size 19 for normal text, 20 titles & display
      --grad:    'GRAD'    400-1000    like weight but no horizontal spacing
      --yaxs:    'YAXS'    400-1000    vertical gradient stretchs glyphs vertically
    */
    --wght: 'wght' 400;
    --opsz: 'opsz' 19;
    --grad: 'GRAD' 400;
    --yaxs: 'YAXS' 400;
  }

  html {
    box-sizing: border-box;
    min-height: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-text-size-adjust: 100%;
    font-size: 62.5%;
    cursor: default;
    line-height: 1.5;
    -moz-tab-size: 4;
    tab-size: 4;
    -webkit-tap-highlight-color: transparent;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    word-break: break-word;
    height: 100%;
    width: 100%;
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  ::before,
  ::after {
    text-decoration: inherit;
    vertical-align: inherit;
  }

  body {
    min-block-size: 100vh;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    line-height: 1.58;
    font-family: var(--font-sans);
    ${supportsVarFont`
      font-family: var(--font-sys);
      font-variation-settings: var(--wght), var(--opsz), var(--grad), var(--yaxs);
    `}
    display: block;
    min-height: 100%;
    width: 100%;
    height: 100%;
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;
    color: ${({ theme }) => theme.text};
  }

  #__next {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  /* Headings */
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-title);
    /*
      --wght     'wght'    0-900       weight
      --opsz:    'opsz'    19-20       optical size 19 for normal text, 20 titles & display
      --grad:    'GRAD'    400-1000    like weight but no horizontal spacing
      --yaxs:    'YAXS'    400-1000    vertical gradient stretchs glyphs vertically
    */
    ${supportsVarFont`
      --wght: 'wght' 700;
      --opsz: 'opsz' 20;
      --grad: 'GRAD' 400;
      --yaxs: 'YAXS' 400;
      font-family: var(--font-sys);
      font-weight: 700;
      font-variation-settings: var(--wght), var(--opsz), var(--grad), var(--yaxs);
    `}
    color: ${({ theme }) => theme.header};
    margin: 0;
    padding: 0;
    line-height: 1.3;
    color: var(--title);
  }

  h1 {
    ${'' /* font-size: 4.2rem; */}
    font-size: clamp(3.2rem, 3.5vw, 4.2rem);
    ${supportsVarFont`
      --wght: 'wght' 640;
      --opsz: 'opsz' 20;
      --grad: 'GRAD' 400;
      --yaxs: 'YAXS' 640;
    `}
  }

  h2 {
    font-size: 3.2rem;
    ${supportsVarFont`
      --wght: 'wght' 620;
      --opsz: 'opsz' 20;
      --grad: 'GRAD' 440;
      --yaxs: 'YAXS' 420;
    `}
  }

  h3 {
    font-size: 2.3rem;
    ${supportsVarFont`
      --wght: 'wght' 545;
      --opsz: 'opsz' 19;
    `}
  }

  h4 {
    font-size: 1.8rem;
    ${supportsVarFont`
      --wght: 'wght' 420;
      --opsz: 'opsz' 19;
      --grad: 'GRAD' 440;
    `}
  }

  p,
  div {
    font-size: 1.6rem;
    ${supportsVarFont`
      --wght: 'wght' 340;
      --opsz: 'opsz' 19;
      --grad: 'GRAD' 400;
      --yaxs: 'YAXS' 420;
    `}
  }

  /* Atomic Component classes */
  .heading {
    &--xxl {
      font-size: 2.5rem;
      line-height: 1.2;
      font-weight: 700;
      letter-spacing: -0.05rem;
      margin: 1rem 0;
    }

    &--xl {
      font-size: 2rem;
      line-height: 1.3;
      font-weight: 700;
      letter-spacing: -0.05rem;
      margin: 1rem 0;
    }

    &--lg {
      font-size: 1.5rem;
      line-height: 1.4;
      margin: 1rem 0;
    }

    &--md {
      font-size: 1.2rem;
      line-height: 1.5;
    }
  }

  .color {
    &--inherit {
      color: inherit;
    }

    &--red {
      color: var(--red);
    }

    &--blue {
      color: var(--blue);
    }

    &--failure {
      color: var(--failure);
    }

    &--success {
      color: var(--success);
    }

    &--light,
    &--muted {
      color: var(--muted);
    }
  }

  .border {
    &--circle {
      border-radius: 9999px;
    }

    &--rounded {
      border-radius: 0.5em;
    }
  }

  .rounded {
    border-radius: 0.5em;
  }

  .padding {
    &--px1 {
      padding-top: 1px;
    }

    &--autoX {
      padding-left: auto;
      padding-right: auto;
    }

    &--autoY {
      padding-top: auto;
      padding-bottom: auto;
    }
  }

  .margin {
    &--px1 {
      margin-top: 1px;
    }

    &--autoX {
      margin-left: auto;
      margin-right: auto;
    }

    &--autoY {
      margin-top: auto;
      margin-bottom: auto;
    }
  }

  .list {
    list-style-type: none;
    padding: 0;
    margin: 0;

    &--item {
      margin: 0 0 1.25rem;
    }
  }

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .container {
    padding: 0;

    & > main {
      max-width: 1000px;
      margin: 3rem auto 6rem;
      padding: 0 4rem;
    }
  }

  ${nprogressCss};
`

export default GlobalStyle
