import startEngine from './index.js'
import generateRandomNumber from './helps.js'

const rule = 'Find the greatest common divisor of given numbers.'
const min = 1
const max = 50

const getNOD = (num1, num2) => (num2 === 0 ? num1 : getNOD(num2, num1 % num2))

const startRound = () => {
  const number1 = generateRandomNumber(min, max)
  const number2 = generateRandomNumber(min, max)

  const expression = `${number1} ${number2}`
  const answer = getNOD(number1, number2).toString()

  return {
    answer,
    expression,
  }
}

const runBrainNodGame = () => startEngine(rule, startRound)

export default runBrainNodGame
