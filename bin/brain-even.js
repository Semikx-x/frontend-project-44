#!/usr/bin/env node

import readlineSync from 'readline-sync'

console.log('Welcome to the Brain Games!')
const name = readlineSync.question('May I have your name? ')
console.log(`Hello, ${name}!`)
console.log('Answer "yes" if the number is even, otherwise answer "no".')

const isEven = num => num % 2 === 0

const roundsToWin = 3
let correctAnswers = 0

while (correctAnswers < roundsToWin) {
  const number = Math.floor(Math.random() * 100)
  console.log(`Question: ${number}`)
  const answer = readlineSync.question('Your answer: ').toLowerCase()

  const correctAnswer = isEven(number) ? 'yes' : 'no'

  if (answer !== 'yes' && answer !== 'no') {
    console.log(`'${answer}' is wrong answer (. Correct answer was '${correctAnswer}'.`)
    console.log(`Let's try again, ${name}!`)
    process.exit(0)
  }

  if (answer === correctAnswer) {
    console.log('Correct!')
    correctAnswers += 1
  }
  else {
    console.log(`'${answer}' is wrong answer (. Correct answer was '${correctAnswer}'.`)
    console.log(`Let's try again, ${name}!`)
    process.exit(0)
  }
}

console.log(`Congratulations, ${name}!`)
