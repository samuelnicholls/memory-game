import React from 'react'
import * as Styles from './styles'

export interface cardProps {
  id?: number,
  src: string,
  alt: string,
  handleChoice?: any
}

export default function Card({ id, src, alt, handleChoice }: cardProps) {
  const cardObject = { src, id }

  const handleClick = () => {
    handleChoice(cardObject)
  }

  return (
    <Styles.Card>
      <div>
        <Styles.CardFrontImage src={src} alt={alt}  />
        <Styles.CardBackImage 
          src='img/cover.jpg' 
          alt='Cover image'
          onClick={handleClick} />
      </div>
    </Styles.Card>
  )
}
