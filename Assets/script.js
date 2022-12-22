// elements
const result = document.getElementById("result");
const numbers = document.getElementsByClassName("number");
const operators = document.getElementsByClassName("operator");
const decimal = document.getElementsByClassName("decimal")[0];
const backspace = document.getElementsByClassName("backspace")[0];
const square = document.getElementsByClassName("square")[0];
const clear = document.getElementsByClassName("clear")[0];
const equal = document.getElementsByClassName("equal")[0];

// initial values
let currentNumber = "";
let previousNumber = "";
let operator = "";

// functions
function setResult(e) {
  result.value = e;
}

function setCurrentNumber(e) {
  // append clicked number
  currentNumber += e;
  // update result
  setResult(currentNumber);
}

function setOperator(e) {
  // store number and operator
  previousNumber = result.value;
  currentNumber = "";
  operator = e;
}

function useDecimal() {
  if (currentNumber == "") {
    setCurrentNumber("0.");
  }
  if (currentNumber.indexOf(".") == -1) {
    setCurrentNumber(".");
  }
}

function calculateSquare() {
  let currentNumberFloat = parseFloat(currentNumber);
  if (isNaN(currentNumberFloat)) {
    setResult("Invalid input");
  } else setResult(Math.sqrt(currentNumberFloat));
}

function clearResult() {
  // reset values
  currentNumber = "";
  previousNumber = "";
  operator = "";
  result.value = currentNumber;
}

function showResult() {
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
}

function deleteLastCharacter() {
  currentNumber = currentNumber.slice(0, -1);
  setResult(currentNumber);
}

// EVENT LISTENERS - CLICK
// numbers
for (let number of numbers) {
  number.addEventListener("click", (e) => {
    // append clicked number
    setCurrentNumber(e.target.value);
  });
}

//  operators
for (let ope of operators) {
  ope.addEventListener("click", (e) => {
    setOperator(e.target.value);
  });
}

// clear button
clear.addEventListener("click", () => {
  clearResult();
});

// equal button
equal.addEventListener("click", () => {
  showResult();
});

// decimal button
decimal.addEventListener("click", () => {
  useDecimal();
});

// backpace button
backspace.addEventListener("click", () => {
  deleteLastCharacter();
});

// square button
square.addEventListener("click", () => {
  calculateSquare();
});

// EVENT LISTENERS - KEYBOARD
document.addEventListener("keydown", (e) => {
  // numbers
  if (e.key >= "0" && e.key <= "9") {
    setCurrentNumber(e.key);
  }

  // operators
  if (e.key == "+" || e.key == "-" || e.key == "*" || e.key == "/") {
    setOperator(e.key);
  }

  // equals & enter button
  if (e.key == "=" || e.key == "Enter") {
    showResult();
  }

  // clear button
  if (e.key == "c" || e.key == "C") {
    clearResult();
  }

  // delete & backspace button
  if (e.key == "Delete" || e.key == "Backspace") {
    deleteLastCharacter();
  }

  // decimaal
  if (e.key == "." || e.key == ",") {
    useDecimal();
  }
});
