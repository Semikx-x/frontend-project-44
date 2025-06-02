#!/usr/bin/env node

import readlineSync from 'readline-sync'

console.log('Welcome to the Brain Games!')
const name = readlineSync.question('May I have your name? ')
console.log(`Hello, ${name}!`)
console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

const isPrime = (num) => {
  if (num <= 1) return 'no'
  if (num === 2) return 'yes'
  if (num % 2 === 0) return 'no'
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return 'no'
  }
  return 'yes'
}
const roundsToWin = 3
let correctAnswers = 0

while (correctAnswers < roundsToWin) {
  const number1 = Math.floor(Math.random() * 100)
  console.log(`Question: ${number1}`)
  const answer = readlineSync.question('Your answer: ').toLowerCase()

  const correctAnswer = isPrime(number1)

  if (answer == correctAnswer) {
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
