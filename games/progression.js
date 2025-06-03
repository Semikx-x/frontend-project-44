import runGame from '../src/index.js'

export default function progression() {
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

  const generateProgression = (length, start, step) => {
    return Array.from({ length }, (_, i) => start + i * step)
  }

  let correctAnswer

  function generateQuestionAndAnswer() {
    const minLength = 5
    const maxLength = 10
    const minStart = 1
    const maxStart = 20
    const minStep = 2
    const maxStep = 5
    const length = getRandomInt(minLength, maxLength)
    const start = getRandomInt(minStart, maxStart)
    const step = getRandomInt(minStep, maxStep)
    const progression = generateProgression(length, start, step)
    const hiddenIndex = getRandomInt(0, length - 1)
    correctAnswer = progression[hiddenIndex]
    const question = progression
      .map((num, idx) => (idx === hiddenIndex ? '..' : num))
      .join(' ')
    return { question, correctAnswer }
  }

  runGame(
    'What number is missing in the progression?',
    generateQuestionAndAnswer)
}
