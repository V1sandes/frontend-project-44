import getRandomInt from '../utils.js';
import { runGame } from '../index.js';

const operations = ['+', '-', '*'];
const roundsCount = 3;

const getQuestionAndAnswer = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const operation = operations[getRandomInt(0, operations.length - 1)];
  
  let question = `${num1} ${operation} ${num2}`;
  let answer;

  switch (operation) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
    default:
      throw new Error(`Unknown operation: ${operation}`);
  }

  return { question, answer: String(answer) };
};

const startGame = () => {
  const description = 'What is the result of the expression?';
  runGame(description, getQuestionAndAnswer, roundsCount);
};

export default startGame;
