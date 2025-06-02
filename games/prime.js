import readlineSync from 'readline-sync'
import runGame from '../src/index.js'

export default prime => {

  const isPrime = (num) => {
    if (num <= 1) return 'no'
    if (num === 2) return 'yes'
    if (num % 2 === 0) return 'no'
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return 'no'
    }
    return 'yes'
  }

  let number1

  function askQuestion() {
    number1 = Math.floor(Math.random() * 100)
    console.log(`Question: ${number1}`)
    return readlineSync.question('Your answer: ').toLowerCase() 
  }

  function makeCorrectAnswer() {
    return isPrime(number1)
  }

  runGame(
    'Answer "yes" if given number is prime. Otherwise answer "no".',
    askQuestion,
    makeCorrectAnswer
  )
}

