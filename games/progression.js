import readlineSync from 'readline-sync'
import runGame from '../src/index.js'

export default function progression() {
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

  const generateProgression = (length, start, step) => {
    return Array.from({ length }, (_, i) => start + i * step)
  }

  let correctAnswer

  function askQuestion() {
    const length = getRandomInt(5, 10)
    const start = getRandomInt(1, 20)
    const step = getRandomInt(2, 5)
    const progression = generateProgression(length, start, step)
    const hiddenIndex = getRandomInt(0, length - 1)
    correctAnswer = progression[hiddenIndex]
    const question = progression
      .map((num, idx) => (idx === hiddenIndex ? '..' : num))
      .join(' ')
    console.log(`Question: ${question}`)
    return readlineSync.question('Your answer: ').toLowerCase()
  }

  function makeCorrectAnswer() {
    return correctAnswer
  }

  runGame(
    'What number is missing in the progression?',
    askQuestion,
    makeCorrectAnswer)
}
