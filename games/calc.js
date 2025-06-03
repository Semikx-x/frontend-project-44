import readlineSync from 'readline-sync'
import runGame from '../src/index.js'

export default function calc() {

  function generateQuestionAndAnswer() {
    const znaki = ['+', '-', '*']
    const maxRandom = 100
    let number1 = Math.floor(Math.random() * maxRandom)
    let number2 = Math.floor(Math.random() * maxRandom)
    let random = Math.floor(Math.random() * znaki.length)
    const question = `${number1} ${znaki[random]} ${number2}`
    const correctAnswer = makeCorrectAnswer(number1, random, number2)
    return { question, correctAnswer }
  }

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

  runGame(
    'What is the result of the expression?',
    generateQuestionAndAnswer)
}
