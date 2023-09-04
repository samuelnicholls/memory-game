import { FC } from 'react'
import * as Styles from './styles'

export type CardProps = {
  id: number
  src: string
  alt?: string
  handleChoice?: (card: CardProps) => void
  matched?: boolean
  isFlipped?: boolean
  disabled?: boolean
}

const Card: FC<CardProps> = ({ id, src, alt, handleChoice, isFlipped, disabled }) => {
  const cardObject = { src, id }

  const handleClick = () => {
    if (disabled) return
    if (handleChoice) {
      handleChoice(cardObject)
    }
  }

  return (
    <Styles.Card>
      <div>
        <Styles.CardFrontImage 
          src={src} 
          alt={alt} 
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