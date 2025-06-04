import runGame from '../src/index.js'
import getRandomInt from './getRandomInt.js'

const maxRandom = 100
const minRandom = 1

const isPrime = (num) => {
  if (num <= 1) return false
  if (num === 2) return true
  if (num % 2 === 0) return false
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false
  }
  return true
}

function makeCorrectAnswer(num) {
  return isPrime(num) ? 'yes' : 'no'
}

function generateQuestionAndAnswer() {
  let number1 = getRandomInt(minRandom, maxRandom)
  const question = `${number1}`
  const correctAnswer = makeCorrectAnswer(number1)
  return { question, correctAnswer }
}

export default function prime() {
  runGame(
    'Answer "yes" if given number is prime. Otherwise answer "no".',
    generateQuestionAndAnswer)
}
