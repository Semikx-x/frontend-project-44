import runGame from '../src/index.js'
import getRandomInt from './getRandomInt.js'

const maxRandom = 100
const minRandom = 1

const nod = (num1, num2) => {
  if (num2 !== 0) {
    const k = num1 % num2
    return nod(num2, k)
  }
  return num1
}

function generateQuestionAndAnswer() {
  let number1 = getRandomInt(minRandom, maxRandom)
  let number2 = getRandomInt(minRandom, maxRandom)
  const question = `${number1} ${number2}`
  const correctAnswer = nod(number1, number2)
  return { question, correctAnswer }
}

export default function gcd() {

  runGame(
    'Find the greatest common divisor of given numbers',
    generateQuestionAndAnswer)
}
