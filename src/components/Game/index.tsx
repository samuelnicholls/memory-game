import { useState } from 'react'
import * as Styles from './styles'
import Button from '../Button/index'
import Card, { cardProps } from '../Card/index'

const cardImages = [
  { "src": "img/london.jpg", "alt": "London"},
  { "src": "img/new-york.jpg", "alt": "New York"},
  { "src": "img/paris.jpg", "alt": "Paris"},
  { "src": "img/rome.jpg", "alt": "Rome"},
  { "src": "img/seoul.jpg", "alt": "Seoul"},
  { "src": "img/sydney.jpg", "alt": "Sydney"}
]

export default function Game() { 
  const [cards, setCards] = useState<cardProps[]>([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState<cardProps | null>(null)
  const [choiceTwo, setChoiceTwo] = useState<cardProps | null>(null)

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

      setCards(shuffledCards)
      setTurns(0)
  }

  const handleChoice = (card: cardProps) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  return (
    <Styles.Game>
      <Styles.GameContainer>
        <Styles.GameTitle>Memory Game</Styles.GameTitle>
        <Button text='New Game' onClick={shuffleCards} />
        <Styles.GameGrid>
          {cards.map(card => (
            <Card 
              key={card.id} 
              id={card.id}
              src={card.src} 
              alt={card.alt}
              handleChoice={handleChoice}
            />
          ))}
        </Styles.GameGrid>
      </Styles.GameContainer>
    </Styles.Game>
  )
}
