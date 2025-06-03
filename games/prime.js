import runGame from '../src/index.js'

export default function prime() {
  const isPrime = (num) => {
    if (num <= 1) return false
    if (num === 2) return true
    if (num % 2 === 0) return false
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false
    }
    return true
  }

  function generateQuestionAndAnswer() {
    const maxRandom = 100
    let number1 = Math.floor(Math.random() * maxRandom)
    const question = `${number1}`
    const correctAnswer = makeCorrectAnswer(number1)
    return { question, correctAnswer }
  }

  function makeCorrectAnswer(num) {
    return isPrime(num) ? 'yes' : 'no'
  }

  runGame(
    'Answer "yes" if given number is prime. Otherwise answer "no".',
    generateQuestionAndAnswer)
}
