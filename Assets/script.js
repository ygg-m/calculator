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
for (let ope of operators) {
  ope.addEventListener("click", (e) => {
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

// add click to equal button
equal.addEventListener("click", () => {
  let prevNum = parseFloat(previousNumber);
  let currNum = parseFloat(currentNumber);

  let resultValue;
  // perform calculation based on operator
  switch (operator) {
    case "+":
      resultValue = prevNum + currNum;
      break;
    case "-":
      resultValue = prevNum - currNum;
      break;
    case "*":
      resultValue = prevNum * currNum;
      break;
    case "/":
      resultValue = prevNum / currNum;
      break;
    default:
      // if no operator is selected
      resultValue = currentNumber;
  }

  // extract decimal
  let resultDecimals = resultValue.toString().split(".")[1] || "";
  let maxDecimals = 5;
  let isDecimalsGreaterThanMax = resultDecimals.length > maxDecimals;

  result.value = resultValue.toFixed(
    isDecimalsGreaterThanMax ? maxDecimals : resultDecimals.length
  );
});

// add keyboard support
document.addEventListener("keydown", (e) => {
  // check if its a number
  if (e.key >= "0" && e.key <= "9") {
    // append pressed number
    currentNumber += e.key;
    // update result
    result.value = currentNumber;
  }

  // check if its an operator
  if (e.key == "+" || e.key == "-" || e.key == "*" || e.key == "/") {
    // store previous number and operator
    previousNumber = currentNumber;
    currentNumber = "";
    operator = e.key;
  }
});
