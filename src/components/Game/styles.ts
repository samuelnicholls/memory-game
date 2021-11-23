import styled from 'styled-components'
import { PURPLE, WHITE } from '../../base/colours'

export const Game = styled.div`
  background-color: ${PURPLE};
  height: 100%;
`

export const GameContainer = styled.div`
  max-width: 860px;
  height: 100%;
  padding: 40px 0;
  margin: 0 auto;
  text-align: center;
`

export const GameTitle = styled.h1`
  color: ${WHITE};
  font-size: 40px;
  margin-bottom: 40px;
`

export const GameGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 40px;
  margin-top: 40px;
`
