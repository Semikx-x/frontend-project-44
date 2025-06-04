import runGame from '../src/index.js'
import getRandomInt from './getRandomInt.js'

const maxRandom = 100
const minRandom = 1

function isEven(num) {
  return num % 2 === 0
}

function generateQuestionAndAnswer() {
  let number = getRandomInt(minRandom, maxRandom)
  const question = number.toString()
  const correctAnswer = isEven(number) ? 'yes' : 'no'
  return { question, correctAnswer }
}

export default function even() {

  runGame(
    'Answer "yes" if the number is even, otherwise answer "no".',
    generateQuestionAndAnswer)
}
