// Get all of the Elements
var firstNumber = document.querySelector('#num_one');
var secondNumber = document.querySelector('#num_two');
var multiplyAll = document.querySelector('#calculateBtn');
var fullAnswer = document.querySelector('#answer');

//Declarations
var a, b;

// Function to multiply numbers
var calculateBtn = function () {
  a = firstNumber.value;
  b = secondNumber.value;
  answerFull = (Number(a) * Number(b));
  fullAnswer.textContent = answerFull;
};

// Clicking the button for the answer
multiplyAll.addEventListener('click', calculateBtn);