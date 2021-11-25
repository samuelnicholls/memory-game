import * as Styles from './styles'

export interface cardProps {
  id?: number,
  src: string,
  alt: string,
  handleChoice?: any,
  matched?: boolean
  isFlipped?: boolean
}

export default function Card({ id, src, alt, handleChoice, isFlipped }: cardProps) {
  const cardObject = { src, id }

  const handleClick = () => {
    handleChoice(cardObject)
  }

  return (
    <Styles.Card>
      <div>
        <Styles.CardFrontImage src={src} alt={alt} isFlipped={isFlipped} />
        <Styles.CardBackImage 
          src='img/cover.jpg' 
          alt='Cover image'
          onClick={handleClick} />
      </div>
    </Styles.Card>
  )
}
