#!/usr/bin/env node

import readlineSync from 'readline-sync';



const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = (length, start, step) => {
    return Array.from({ length }, (_, i) => start + i * step);
};

const playRound = () => {
    const length = getRandomInt(5, 10);
    const start = getRandomInt(1, 20);
    const step = getRandomInt(2, 5);
    const progression = generateProgression(length, start, step);
    const hiddenIndex = getRandomInt(0, length - 1);
    const correctAnswer = progression[hiddenIndex];
    const question = progression
        .map((num, idx) => (idx === hiddenIndex ? '..' : num))
        .join(' ');
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === String(correctAnswer)) {
        console.log('Correct!');
        return true;
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        return false;
    }
};

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('What number is missing in the progression?');

let roundsToWin = 3;
for (let i = 0; i < roundsToWin; i++) {
    if (!playRound()) {
        console.log(`Let's try again, ${userName}!`);
        process.exit(0);
    }
}
console.log(`Congratulations, ${userName}!`);