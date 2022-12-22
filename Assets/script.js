// elements
const result = document.getElementById("result");
const numbers = document.getElementsByClassName("number");
const operators = document.getElementsByClassName("operator");
const clear = document.getElementsByClassName("clear")[0];
const equal = document.getElementsByClassName("equal")[0];

// initial values
let currentNumber = "";
let previousNumber = "";
let operator = "";

// add event listeners to numbers
for (let number of numbers) {
  number.addEventListener("click", (e) => {
    // append clicked number
    currentNumber += e.target.value;

    // update result
    result.value = currentNumber;
  });
}