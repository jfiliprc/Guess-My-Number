'use strict';

/// Variables
const secret_number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

/// Functions to simplify the code
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  displayScore(score);
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

displayScore(score);

/// Again button
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  score = 20;
  displayScore(score);
  document.querySelector('.guess').value = '';
  displayNumber('?');
  document.querySelector('.number').style.width = '30rem';
});

/// Check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  /// No valid number inputed
  if (!guess) {
    displayMessage('No number typed!');

    /// Correct number
  } else if (guess == secret_number) {
    displayNumber(secret_number);
    displayMessage('Correct number!');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    /// Highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  }

  /// Diferent number (Higher or Lower)
  else if (guess != secret_number) {
    displayMessage(guess > secret_number ? 'Too High!' : 'Too low!');
    score--;
    displayScore(score);

    /// Game over
  } else if (score < 1) {
    score = 0;
    displayScore(score);
    displayMessage('No more chances, you lost!');
    document.querySelector('body').style.backgroundColor = 'red';
  }
});
