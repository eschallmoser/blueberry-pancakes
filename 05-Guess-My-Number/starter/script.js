'use strict';

//DOM Manipulation

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!🎉';document.querySelector('.message').textContent;

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//Handling Click Events, Implementing Game Logic

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);
  // console.log(secretNumber);

  if (!guess) {
    displayMessage('⛔ No number!');
  } else if (guess === secretNumber) {
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    score = 0;
    displayMessage('Correct Number!🎉');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high! 👇' : 'Too low! ☝');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game! 💥');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = '☹';
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});

//Refactoring:

//identify the duplicate code that exists in your code base
//what is both sets of duplicate code doing, and how can it be combined into a single code block?
//you can create functions to help with duplicate code
