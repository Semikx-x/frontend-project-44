import readlineSync from 'readline-sync'
import runGame from '../src/index.js'

export default function calc() {
  const znaki = ['+', '-', '*']
  let number1
  let number2
  let random
  const maxRandom = 100 

  function askQuestion() {
    number1 = Math.floor(Math.random() * maxRandom)
    number2 = Math.floor(Math.random() * maxRandom)
    random = Math.floor(Math.random() * znaki.length)

    console.log(`Question: ${number1} ${znaki[random]} ${number2}`)
    return readlineSync.question('Your answer: ').toLowerCase()
  }

  function makeCorrectAnswer() {
    if (random === 0) {
      return number1 + number2
    }

    if (random === 1) {
      return number1 - number2
    }

    if (random === 2) {
      return number1 * number2
    }
  }

  runGame(
    'What is the result of the expression?',
    askQuestion,
    makeCorrectAnswer)
}
