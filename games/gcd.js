import readlineSync from 'readline-sync'
import runGame from '../src/index.js'

export default function gcd() {
  const nod = (num1, num2) => {
    if (num2 !== 0) {
      const k = num1 % num2
      return nod(num2, k)
    }
    return num1
  }

  function generateQuestionAndAnswer() {
    const maxRandom = 100
    let number1 = Math.floor(Math.random() * maxRandom)
    let number2 = Math.floor(Math.random() * maxRandom)
    const question = `${number1} ${number2}`
    const correctAnswer = nod(number1, number2)
    return { question, correctAnswer }
  }


  runGame(
    'Find the greatest common divisor of given numbers',
    generateQuestionAndAnswer)
}
