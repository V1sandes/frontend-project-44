import readlineSync from 'readline-sync'

const greetingsMsg = 'Welcome to the Brain Games!'
const timeCount = 3

const startEngine = (rule, getGameOptions) => {
  console.log(`${greetingsMsg}`)
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)
  console.log(`${rule}`)
  
  for (let i = 0; i < timeCount; i += 1) {
    const { expression: questionExpression, answer: correctAnswer } = getGameOptions()
    console.log(`Question: ${questionExpression}`)
    const userAnswer = readlineSync.question('Your answer: ')
    
    if (correctAnswer === userAnswer) {
      console.log('Correct!')
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }
  }

  console.log(`Congratulations, ${userName}!`)
}

export default startEngine
