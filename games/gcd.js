import readlineSync from 'readline-sync'
import runGame from '../src/index.js'

export default gcd => {
  const nod = (num1, num2) => {
    if (num2 !== 0) {
      const k = num1 % num2
      return nod(num2, k)
    }
    return num1
  }

  let number1
  let number2

  function askQuestion() {
    number1 = Math.floor(Math.random() * 100)
    number2 = Math.floor(Math.random() * 100)
    console.log(`Question: ${number1} ${number2}`)
    return readlineSync.question('Your answer: ').toLowerCase()
  }

  function makeCorrectAnswer() {
    return nod(number1, number2)
  }

  runGame(
    'Find the greatest common divisor of given numbers',
    askQuestion,
    makeCorrectAnswer
  )
}
