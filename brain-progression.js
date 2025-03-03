#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { randomInt } from 'crypto';

const generateProgression = (length, start, step, hiddenIndex) => {
  const progression = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }
  progression[hiddenIndex] = '..';
  return progression;
};

const main = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');

  const rounds = 3;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < rounds; i++) {
    const progressionLength = randomInt(5, 10);
    const start = randomInt(1, 20);
    const step = randomInt(1, 5);
    const hiddenIndex = randomInt(0, progressionLength);

    const progression = generateProgression(progressionLength, start, step, hiddenIndex);
    console.log(`Question: ${progression.join(' ')}`);

    const correctAnswer = (start + hiddenIndex * step).toString();
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}! You've completed the game!`);
};

main();
