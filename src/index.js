import readlineSync from 'readline-sync'

export default function runGame(gameInfo, generateQuestionAndAnswer) {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log(gameInfo)

  const roundsToWin = 3
  let correctAnswers = 0

  while (correctAnswers < roundsToWin) {
    const { question, correctAnswer } = generateQuestionAndAnswer()

    console.log(`Question: ${question}`)
    let answer = readlineSync.question('Your answer: ').toLowerCase()

    if (answer == correctAnswer) {
      console.log('Correct!')
      correctAnswers += 1
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      process.exit(0)
    }
  }

  console.log(`Congratulations, ${name}!`)
}
