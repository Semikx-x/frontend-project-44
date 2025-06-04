import readlineSync from 'readline-sync'

export default function runGame(gameInfo, generateQuestionAndAnswer) {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log(gameInfo)

  const roundsToWin = 3


  for (let i = 0; i < roundsToWin; i += 1) {
    const { question, correctAnswer } = generateQuestionAndAnswer()

    console.log(`Question: ${question}`)
    let answer = readlineSync.question('Your answer: ').toLowerCase()

    if (answer == correctAnswer) {
      console.log('Correct!')
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      return console.log(`Let's try again, ${name}!`)
    }
  }

  console.log(`Congratulations, ${name}!`)
}
