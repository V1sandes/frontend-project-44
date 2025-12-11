import startEngine from './index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const limit = {
  min: 0,
  max: 1000,
};

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const getQuAndAn = () => {
  const expression = getRandomNumber(limit.min, limit.max);
  const answer = isPrime(expression) ? 'yes' : 'no';

  return {
    answer,
    expression,
  };
};

const runBrainPrimeGame = () => startEngine(rule, getQuAndAn);

export default runBrainPrimeGame;
