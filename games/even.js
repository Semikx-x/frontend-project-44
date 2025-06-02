import readlineSync from 'readline-sync'
import runGame from '../src/index.js'

export default even = () => {
  function isEven(num) {
    return num % 2 === 0
  }
  let number

  function askQuestion() {
    number = Math.floor(Math.random() * 100)
    console.log(`Question: ${number}`)
    return readlineSync.question('Your answer: ').toLowerCase()
  }

  function makeCorrectAnswer() {
    return isEven(number) ? 'yes' : 'no'
  }

  runGame(
    'Answer "yes" if the number is even, otherwise answer "no".',
    askQuestion,
    makeCorrectAnswer)
}
