import runGame from '../src/index.js'
import getRandomInt from './getRandomInt.js'

const znaki = ['+', '-', '*']
const maxRandom = 100
const minRandom = 1

function makeCorrectAnswer(num1, znak, num2) {
  if (znak === 0) {
    return num1 + num2
  }

  if (znak === 1) {
    return num1 - num2
  }

  if (znak === 2) {
    return num1 * num2
  }
}

function generateQuestionAndAnswer() {
  let number1 = getRandomInt(minRandom, maxRandom)
  let number2 = getRandomInt(minRandom, maxRandom)
  let random = getRandomInt(minRandom, znaki.length - 1)
  const question = `${number1} ${znaki[random]} ${number2}`
  const correctAnswer = makeCorrectAnswer(number1, random, number2)
  return { question, correctAnswer }
}

export default function calc() {
  runGame(
    'What is the result of the expression?',
    generateQuestionAndAnswer)
}
