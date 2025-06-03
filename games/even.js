import runGame from '../src/index.js'

export default function even() {
  function isEven(num) {
    return num % 2 === 0
  }

  function generateQuestionAndAnswer() {
    const maxRandom = 100
    let number = Math.floor(Math.random() * maxRandom)
    const question = number.toString()
    const correctAnswer = isEven(number) ? 'yes' : 'no'
    return { question, correctAnswer }
  }

  runGame(
    'Answer "yes" if the number is even, otherwise answer "no".',
    generateQuestionAndAnswer)
}
