'use strict';

let guessNumber = Math.floor(Math.random() * 20) + 1;
console.log(guessNumber);


const checkBtn = document.querySelector(".check");
const message = document.querySelector(".message");
const guessInput = document.querySelector(".guess");
const scoreDisplay = document.querySelector(".score");
const numberDisplay = document.querySelector(".number");
const highscoreDisplay = document.querySelector(".highscore");
const betweenDisplay = document.querySelector(".between");
const againBtn = document.querySelector(".again");

let score = 20;
let highscore = 0;
scoreDisplay.textContent = score;
highscoreDisplay.textContent = highscore;

checkBtn.addEventListener('click', () => {
  const input = guessInput.value;
  
  if (!input) {
    message.textContent = "Where is the number?!";
    message.style.color = "red";
    document.body.style.backgroundColor = "orange";
  } else if (input < 1 || input > 20) {
    betweenDisplay.style.color = "red";
    document.body.style.backgroundColor = "orange";
    message.textContent = "?!";
  } else if (input < guessNumber) {
    scoreDisplay.textContent = --score;
    message.textContent = "Number is low";
    document.body.style.backgroundColor = "red";
  } else if (input > guessNumber) {
    scoreDisplay.textContent = --score;
    message.textContent = "Number is high";
    document.body.style.backgroundColor = "red";
  } else {
    message.textContent = "Number is equal";
    document.body.style.backgroundColor = "green";
    numberDisplay.style.width = '30rem';
    numberDisplay.textContent = guessNumber;
    
    if (score > highscore) {
      highscore = score;
      highscoreDisplay.textContent = highscore;
    }
    
    againBtn.style.backgroundColor = "red";
  }
});

againBtn.addEventListener('click', () => {
    score = 20;
    guessNumber = Math.floor(Math.random() * 20) + 1;
    console.log(guessNumber);
    
    message.textContent = 'Start guessing...';
    scoreDisplay.textContent = score;
    numberDisplay.textContent = '?';
    guessInput.value = '';
    document.body.style.backgroundColor = '#222';
    numberDisplay.style.width = '15rem';
    againBtn.style.backgroundColor="white";
    betweenDisplay.style.color="white"
  });
  
