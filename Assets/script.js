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

// add event listener to operators
for (let operator in operators) {
  operator.addEventListener("click", (e) => {
    // store number and operator
    previousNumber = currentNumber;
    currentNumber = "";
    operator = e.target.value;
  });
}

// add click to clear button
clear.addEventListener("click", () => {
    // reset values
    currentNumber = "";
    previousNumber = "";
    operator = "";
    result.value = currentNumber;
  });
  