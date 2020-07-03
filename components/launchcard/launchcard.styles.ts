import styled from 'styled-components'
import { Link as IconLink } from '@styled-icons/feather/Link'
import { motion } from 'framer-motion'

import { mixins } from 'styles'

// export const Box = styled(motion.article)`
//   display: block;
//   width: 100%;
//   height: 100%;
//   margin: 0;
//   padding: 0;
// `

export const Wrapper = styled(motion.article)<{ $color: string }>`
  --color: ${props => props.$color || 'var(--success)'};
  /* margin: 2rem 0; */
  margin: 0;
  padding: 2rem;
  width: 100%;
  height: 100%;
  display: grid;
  /* grid-template-columns: auto 1fr 1fr; */
  /* grid-template-rows: repeat(auto-fill, minmax(2rem, 1fr)); */
  /* grid-auto-rows: auto; */
  row-gap: 5px;
  column-gap: 10px;
  border: 2px solid var(--color);
  border-radius: var(--rounded);
  grid-template-areas:
    'img       title     title     title'
    'desc      desc      desc      desc'
    'footer    footer    footer    footer';
`

export const Img = styled.img`
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

export const Badge = styled.div`
  grid-area: img;
  cursor: pointer;
`

export const H3 = styled.h3`
  --grad: 'GRAD' 610;
  grid-area: header;
  font-weight: 600;
  line-height: 1.2;
  margin: 0;
  padding: 1rem;
`

export const Header = styled.header`
  grid-area: title;

  display: grid;
  grid-template-areas:
    'title'
    'date';

  row-gap: 0.5rem;

  > ${H3} {
    grid-area: title;
  }

  > h4 {
    grid-area: date;
    font-weight: 400;
    padding: 0;
  }
`

export const Meta = styled.section`
  margin: 0;
  padding: 0;
  color: var(--color);
`

export const Content = styled.div`
  grid-area: desc;
  line-height: 1.5;
  margin: 0;
  height: 7.2rem;
  overflow: hidden;

  & > p {
    margin: 0;
    overflow: hidden;
  }

  position: relative;

  &::after {
    content: '';
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 70%;
    height: 2.4rem;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1) 50%
    );
  }
  ${'' /* font-size: 1.3rem; */}
`

export const Details = styled.footer`
  grid-area: footer;
  margin: 0;
  padding: 0;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  & > a {
    color: var(--color);
    line-height: 1;
  }

  & > span {
    color: var(--color);
    text-transform: uppercase;
  }
`

export const LinkIcon = styled(IconLink)`
  margin-left: 4px;
  width: 2rem;
  height: 2rem;
`
