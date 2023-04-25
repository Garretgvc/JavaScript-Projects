'use strict';

// DOM manipulation 

// console.log( document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}
const displayNumber = function (number) {
    document.querySelector('.number').textContent = number;
}
const displayScore = function (score) {
    document.querySelector('.score').textContent = score;
}
const displayGuess = function (guess) {
    document.querySelector('.guess').textContent = guess;
}
const modifyStyle = function (bodyColor, numberSize) {
    document.querySelector('body').style.backgroundColor =bodyColor;
    document.querySelector('.number').style.width = numberSize;
}

document.querySelector('.again').addEventListener(
    'click', function () {
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        score = 20;
        displayMessage('Start guessing...');
        displayNumber('?');
        displayScore(score);
        modifyStyle('#222', '15rem')
        document.querySelector('.guess').value ='';
    });

document.querySelector('.check').addEventListener(
    'click', function () {
        const guess = Number(document.querySelector('.guess').value);

        // No number
        if (!guess) {
            displayMessage('⛔ No Number!');

            // number correct
        } else if (guess === secretNumber) {
            displayMessage('🎉 Correct Number!');
            modifyStyle('#60b347', '30rem')

            if (score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }

            // number to wrong
        } else if (guess !== secretNumber) {
            if (score > 1) {
                displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
                score--;
                displayScore(score);
                // if score is zero
            } else {
                displayMessage('💥 You Lost The Game!');
                displayScore(0);
            }
        }
    });