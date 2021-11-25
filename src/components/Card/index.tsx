import * as Styles from './styles'

export interface cardProps {
  id: number
  src: string
  alt?: string
  handleChoice?: (card: cardProps) => void
  matched?: boolean
  isFlipped?: boolean
  disabled?: boolean
}

export default function Card({ id, src, alt, handleChoice, isFlipped, disabled }: cardProps) {
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
