import startEngine from './index.js'

const rule = 'Answer "yes" if the number is even, otherwise answer "no".'
const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
const limit = {
  min: 0,
  max: 100,
}

const isEven = num => num % 2 === 0

const getEvenGameOptions = () => {
  const randNum = getRandomNum(limit.min, limit.max)

  const expression = `${randNum}`

  const answer = isEven(randNum) ? 'yes' : 'no'

  return {
    answer,
    expression,
  }
}

const startEvenGame = () => startEngine(rule, getEvenGameOptions)

export default startEvenGame
//
