#!/usr/bin/env node
import readlineSync from 'readline-sync';
import game from '../src/cli.js';

const isEvenGame = () => {
  const name = game();
  let score = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  while (score < 3) {
    const getRandomInt = () => Math.floor(Math.random() * 100) + 1;
    const isEven = (num) => num % 2 === 0;
    const getRandomNum = getRandomInt();

    console.log(`Question: ${getRandomNum}`);

    const correctAnswer = isEven(getRandomNum) ? 'yes' : 'no';
    const userAnswer = readlineSync.question('Your answer is: ');

    if (userAnswer.toLowerCase() === correctAnswer) {
      score += 1;
      console.log('Correct!');
    } else {
      console.log(
        `${userAnswer} is wrong answer ;(. Correct answer is ${correctAnswer}.`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}! Your score is: ${score}`);
};

isEvenGame();
