import { useState, useEffect } from 'react'
import * as Styles from './styles'
import Button from '../Button/index'
import Card, { cardProps } from '../Card/index'

const cardImages = [
  { "src": "img/london.jpg", "alt": "London", "matched": false},
  { "src": "img/new-york.jpg", "alt": "New York", "matched": false},
  { "src": "img/paris.jpg", "alt": "Paris", "matched": false},
  { "src": "img/rome.jpg", "alt": "Rome", "matched": false},
  { "src": "img/seoul.jpg", "alt": "Seoul", "matched": false},
  { "src": "img/sydney.jpg", "alt": "Sydney", "matched": false}
]

export default function Game() { 
  const [cards, setCards] = useState<cardProps[]>([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState<cardProps | null>(null)
  const [choiceTwo, setChoiceTwo] = useState<cardProps | null>(null)

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCards(previousCards => {
          return previousCards.map(card => {
            if (card.src === choiceOne.src) {
              return {...card, matched: true}
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 1000)
      }
    }
  },[choiceOne, choiceTwo])

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

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(previousTurns => previousTurns + 1)
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
              isFlipped={card.id === choiceOne?.id || card.id === choiceTwo?.id || card.matched}
            />
          ))}
        </Styles.GameGrid>
      </Styles.GameContainer>
    </Styles.Game>
  )
}
