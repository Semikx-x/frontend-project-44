import readlineSync from 'readline-sync'

export default function runGame(question, askQuestion, makeCorrectAnswer) {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log(question)

  const roundsToWin = 3
  let correctAnswers = 0

  while (correctAnswers < roundsToWin) {
    const answer = askQuestion()
    const correctAnswer = makeCorrectAnswer()

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
