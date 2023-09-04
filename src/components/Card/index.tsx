import { FC } from 'react'
import * as Styles from './styles'
import { CardOption } from '../../types';

export type CardProps = {
  option: CardOption;
  handleChoice: (card: any) => void
  isFlipped: boolean
  disabled: boolean
}

const Card: FC<CardProps> = ({ option, handleChoice, isFlipped, disabled }) => {
  const handleClick = () => {
    if (disabled) return
    handleChoice(option)
  }

  return (
    <Styles.Card>
      <div>
        <Styles.CardFrontImage 
          src={option.src} 
          alt={option.alt} 
          isFlipped={isFlipped} 
        />
        <Styles.CardBackImage 
          src='img/cover.jpg' 
          alt='Cover image'
          onClick={handleClick}
          isFlipped={isFlipped} 
        />
      </div>
    </Styles.Card>
  )
}

export default Card;