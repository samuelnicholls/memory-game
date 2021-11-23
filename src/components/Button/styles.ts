import styled from 'styled-components'
import { WHITE, BLACK } from '../../base/colours'

export const Button = styled.button`
  padding: 10px 20px;
  background-color: transparent;
  border: none;
  border: 1px solid ${WHITE};
  color: ${WHITE};
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: ${WHITE};
    color: ${BLACK};
  }
`
