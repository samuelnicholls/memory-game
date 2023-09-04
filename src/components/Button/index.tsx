import { MouseEvent, FC } from 'react'
import * as Styles from './styles'

export type ButtonProps = {
  text: string
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

const Button: FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <Styles.Button type="button" onClick={onClick}>
      {text}
    </Styles.Button>
  )
}

export default Button;