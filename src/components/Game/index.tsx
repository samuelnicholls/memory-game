import { useState, useEffect } from 'react'
import * as Styles from './styles'
import Button from '../Button/index'
import Card from '../Card/index'
import { CardOption } from '../../types'

const cardImages = [
  { "src": "img/london.jpg", "alt": "London", "matched": false},
  { "src": "img/new-york.jpg", "alt": "New York", "matched": false},
  { "src": "img/paris.jpg", "alt": "Paris", "matched": false},
  { "src": "img/rome.jpg", "alt": "Rome", "matched": false},
  { "src": "img/seoul.jpg", "alt": "Seoul", "matched": false},
  { "src": "img/sydney.jpg", "alt": "Sydney", "matched": false}
]

export default function Game() { 
  const [cards, setCards] = useState<CardOption[]>([])
  const [turns, setTurns] = useState<number>(0)
  const [choiceOne, setChoiceOne] = useState<CardOption | null>(null)
  const [choiceTwo, setChoiceTwo] = useState<CardOption | null>(null)
  const [disabled, setDisabled] = useState<boolean>(false)

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
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

  useEffect(() => {
    shuffleCards()
  }, [])

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
      setChoiceOne(null)
      setChoiceTwo(null)
      setCards(shuffledCards)
      setTurns(0)
  }

  const handleChoice = (card: CardOption) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(previousTurns => previousTurns + 1)
    setDisabled(false)
  }

  return (
    <Styles.Game>
      <Styles.GameContainer>
        <Styles.GameWrapper>
          <Styles.GameTitle>Memory Game</Styles.GameTitle>
          <Button text='New Game' onClick={shuffleCards} />
        </Styles.GameWrapper>
        <Styles.GameGrid>
          {cards.map(option => (
            <Card
              key={option.id}
              option={option}
              handleChoice={handleChoice}
              isFlipped={option.id === choiceOne?.id || option.id === choiceTwo?.id || option.matched}
              disabled={disabled}
            />
          ))}
        </Styles.GameGrid>
        <Styles.GameTurns>Turns: {turns}</Styles.GameTurns>
      </Styles.GameContainer>
    </Styles.Game>
  )
}
