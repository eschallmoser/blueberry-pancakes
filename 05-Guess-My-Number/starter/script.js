'use strict';

//DOM Manipulation

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!🎉';document.querySelector('.message').textContent;

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//Handling Click Events, Implementing Game Logic
const generateSecretNumber = () => {
  return Math.trunc(Math.random() * 20) + 1;
};

const enableOrDisableCheckButton = disable => {
  document.getElementsByClassName('check')[0].disabled = disable;
};

let secretNumber = generateSecretNumber();
let score = 20;
let highScore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No number!');
  } else if (guess === secretNumber) {
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // score = 0;
    enableOrDisableCheckButton(true);
    displayMessage('Correct Number!🎉');
    document.querySelector('.number').textContent = secretNumber;
    if (score === 7) {
      document.querySelector('body').style.backgroundColor = '#6d32a8';
      const tag = document.createElement('p');
      tag.setAttribute('class', 'seven');
      tag.textContent = 'YOU GOT THE LUCKY SEVEN SCORE!';
      const element = document.querySelector('.right');
      element.appendChild(tag);
    } else {
      document.querySelector('body').style.backgroundColor = '#60b347';
    }
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

document.querySelector('.again').addEventListener('click', () => {
  document.querySelector('.seven').remove();
  score = 20;
  enableOrDisableCheckButton(false);
  secretNumber = generateSecretNumber();
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

//challege:
//create easter egg--when you hover over exclamation point, secret number becomes visible in very subtle way, gradient

document
  .querySelector('.easter-egg')
  .addEventListener('mouseover', function () {
    // alert('mouse over test!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.backgroundColor = '#f5b8ea';

    const tag = document.createElement('p');
    tag.setAttribute('class', 'secret');
    tag.textContent = "Shh...it's a secret";
    const element = document.getElementById('header');
    element.appendChild(tag);
  });

document.querySelector('.easter-egg').addEventListener('mouseout', function () {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.backgroundColor = '#eee';
  document.querySelector('.secret').remove();
});

//Refactoring:

//identify the duplicate code that exists in your code base
//what is both sets of duplicate code doing, and how can it be combined into a single code block?
//you can create functions to help with duplicate code
