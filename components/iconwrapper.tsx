import styled, { css } from 'styled-components'
import { StyledIconBase, StyledIconProps } from '@styled-icons/styled-icon'

interface IconProps extends StyledIconProps {
  color?: string
  size?: number | string
  width?: number | string
  height?: number | string
}

export const IconStyleWrapper = styled.div<IconProps>`
  ${StyledIconBase} {
    color: ${({ color }) => color || 'currentColor'};
    ${props => {
      if (props.size) {
        return css`
          width: ${props.size};
          height: ${props.size};
        `
      } else if (props.width) {
        return css`
          width: ${props.width};
        `
      } else if (props.height) {
        return css`
          height: ${props.height};
        `
      }
    }}
  }
`
