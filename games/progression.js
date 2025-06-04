import runGame from '../src/index.js'
import getRandomInt from './getRandomInt.js'

  const minLengthAndMaxStep = 5
  const maxLength = 10
  const minStart = 1
  const maxStart = 20
  const minStep = 2

const generateProgression = (length, start, step) => {
  return Array.from({ length }, (_, i) => start + i * step)
}

function generateQuestionAndAnswer() {

  const length = getRandomInt(minLengthAndMaxStep, maxLength)
  const start = getRandomInt(minStart, maxStart)
  const step = getRandomInt(minStep, minLengthAndMaxStep)
  const progression = generateProgression(length, start, step)
  const hiddenIndex = getRandomInt(0, length - 1)
  let correctAnswer = progression[hiddenIndex]
  const question = progression
    .map((num, idx) => (idx === hiddenIndex ? '..' : num))
    .join(' ')
  return { question, correctAnswer }
}

export default function progression() {

  runGame(
    'What number is missing in the progression?',
    generateQuestionAndAnswer)
}
