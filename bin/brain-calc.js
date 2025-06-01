#!/usr/bin/env node

import readlineSync from 'readline-sync'

console.log('Welcome to the Brain Games!')
const name = readlineSync.question('May I have your name? ')
console.log(`Hello, ${name}!`)
console.log('What is the result of the expression?')

const znaki = ['+', '-', '*']

const primer = (num1, random, num2) => {

  if (random === 0) {
    return num1 + num2
  }

  if (random === 1) {
    return num1 - num2
  }

  if (random === 2) {
    return num1 * num2
  }
}
const roundsToWin = 3
let correctAnswers = 0

while (correctAnswers < roundsToWin) {
  const number1 = Math.floor(Math.random() * 100)
  const number2 = Math.floor(Math.random() * 100)
  const randam = Math.floor(Math.random() * 3)
  console.log(`Question: ${number1} ${znaki[randam]} ${number2}`)
  const answer = readlineSync.question('Your answer: ').toLowerCase()

  const correctAnswer = primer(number1, randam, number2)

  if (answer == correctAnswer) {
    console.log('Correct!')
    correctAnswers += 1
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
    console.log(`Let's try again, ${name}!`)
    process.exit(0)
  }
}

console.log(`Congratulations, ${name}!`)
