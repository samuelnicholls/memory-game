import styled from 'styled-components'
import { WHITE } from '../../base/colours'

export const Card = styled.div`
  position: relative;
`

export const CardFrontImage = styled.img<{isFlipped: boolean | undefined}>`
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  border: 2px solid ${WHITE};
  border-radius: 6px;
  transform: ${props => props.isFlipped ? 'rotateY(0deg)' : 'rotateY(90deg)'};
`

export const CardBackImage = styled.img`
  display: block;
  width: 100%;
  border: 2px solid ${WHITE};
  border-radius: 6px;
`
