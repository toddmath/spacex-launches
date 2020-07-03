import styled from 'styled-components'

export const Card = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  border: 1pt solid var(--color);
  border-radius: var(--rounded);
  padding: 1em 1.5em;
  /* background-color: var(--successBg); */
  background-color: var(--cardBg);

  @supports (backdrop-filter: blur(10px)) {
    backdrop-filter: blur(3px);
    background-color: var(--bg);
  }

  /* Subtitle */
  > h2,
  > h3,
  > h4,
  > h5 {
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
