import startEngine from './index.js'

const rule = 'What is the result of the expression?'
const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
const limit = {
  min: 0,
  max: 100,
}
const operator = {
  plus: '+',
  minus: '-',
  prod: '*',
}

const calculateExpr = (firstNum, secondNum, oper) => {
  switch (oper) {
    case operator.plus:
      return firstNum + secondNum;
    case operator.minus:
      return firstNum - secondNum;
    case operator.prod:
      return firstNum * secondNum;
    default:
      return (`Unknown '${oper}'!`)
  }
}

const getCalcGameOptions = () => {
  const randA = getRandomNum(limit.min, limit.max)
  const randB = getRandomNum(limit.min, limit.max)
  const randOper = Object.values(operator)[getRandomNum(0, Object.keys(operator).length - 1)]

  const expression = `${randA} ${randOper} ${randB}`

  const value = calculateExpr(randA, randB, randOper)

  const answer = String(value)

  return {
    answer,
    expression,
  }
}

const startCalcGame = () => startEngine(rule, getCalcGameOptions)

export default startCalcGame
//
