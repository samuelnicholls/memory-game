import styled from 'styled-components'
import { WHITE } from '../../base/colours'

export const Card = styled.div`
  position: relative;
  min-height: 200px;
`

export const CardFrontImage = styled.img<{isFlipped: boolean | undefined}>`
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  transform: ${props => props.isFlipped ? 'rotateY(0deg)' : 'rotateY(90deg)'};
  transition: all ease-in 0.2s;
  transition-delay: ${props => props.isFlipped ? '0.2s' : '0s'};
  border: 2px solid ${WHITE};
  border-radius: 6px;
`

export const CardBackImage = styled.img<{isFlipped: boolean | undefined}>`
  display: block;
  width: 100%;
  border-radius: 6px;
  transform: ${props => props.isFlipped ? 'rotateY(90deg)' : 'rotateY(0deg)'};
  transition: all ease-in 0.2s;
  transition-delay: ${props => props.isFlipped ? '0s' : '0.2s'};
  border: 2px solid ${WHITE};
  border-radius: 6px;
`
