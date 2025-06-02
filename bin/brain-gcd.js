#!/usr/bin/env node

import readlineSync from 'readline-sync'

console.log('Welcome to the Brain Games!')
const name = readlineSync.question('May I have your name? ')
console.log(`Hello, ${name}!`)
console.log('Find the greatest common divisor of given numbers')

const nod = (num1, num2) => {
  if (num2 !== 0) {
    const k = num1 % num2
    return nod(num2, k)
  }
  return num1
}
const roundsToWin = 3
let correctAnswers = 0

while (correctAnswers < roundsToWin) {
  const number1 = Math.floor(Math.random() * 100)
  const number2 = Math.floor(Math.random() * 100)
  console.log(`Question: ${number1} ${number2}`)
  const answer = readlineSync.question('Your answer: ').toLowerCase()

  const correctAnswer = nod(number1, number2)

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
