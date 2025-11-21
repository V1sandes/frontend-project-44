#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = (length, start, step, hiddenIndex) => {
  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }
  progression[hiddenIndex] = '..'; 
  return progression;
};

const brainProgression = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');

  const length = getRandomInt(5, 10);
  const start = getRandomInt(1, 20);
  const step = getRandomInt(1, 5);
  const hiddenIndex = getRandomInt(0, length - 1);
  
  const progression = generateProgression(length, start, step, hiddenIndex);
  const question = progression.join(' ');

  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');

  const correctAnswer = start + hiddenIndex * step;

  if (parseInt(answer, 10) === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    return;
  }

  console.log(`Congratulations, ${name}!`);
};

brainProgression();
