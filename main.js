let enterNumber = "";
let firstOperand = "";
let secondOperand = "";
let currentTotal = "0";
let previousTotal = "";
let operation = "";

//Bottons DOM
const numbers = document.querySelectorAll("[data-number]");
const operators = document.querySelectorAll("[data-operator]");
const equal = document.querySelector("[data-equal]");

// Screen DOM
const result = document.getElementById("result");
const equation = document.getElementById("equation");

const clear = document.getElementById("clear");

function assignValue(number) {
  if (operation === "") {
    firstOperand = number;
  } else if (operation !== "") {
    secondOperand = number;
  }
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000;
}

function updateResultDisplay() {
  result.textContent = currentTotal;
}

function updateEquationDisplay() {
  if (operation === "" && currentTotal === "") {
    result.textContent = firstOperand;
  } else if (operation !== "" && currentTotal === "") {
    result.textContent = secondOperand;
  } else if (currentTotal !== "") {
    result.textContent = currentTotal;
  }
  equation.textContent = `${firstOperand} ${operation} ${secondOperand}`;
}

function calculate() {
  switch (operation) {
    case "+":
      currentTotal = roundResult(
        parseFloat(firstOperand) + parseFloat(secondOperand)
      );
      updateResultDisplay();
      updateEquationDisplay();
      reset();
      break;
    case "-":
      currentTotal = roundResult(
        parseFloat(firstOperand) - parseFloat(secondOperand)
      );
      updateResultDisplay();
      updateEquationDisplay();
      reset();
      break;

    case "×":
      currentTotal = roundResult(
        parseFloat(firstOperand) * parseFloat(secondOperand)
      );
      updateResultDisplay();
      updateEquationDisplay();
      reset();
      break;

    case "÷":
      currentTotal = roundResult(
        parseFloat(firstOperand) / parseFloat(secondOperand)
      );
      updateResultDisplay();
      updateEquationDisplay();
      reset();
      break;

    case "%":
      currentTotal = roundResult(
        parseInt(firstOperand) % parseInt(secondOperand)
      );
      updateResultDisplay();
      updateEquationDisplay();
      reset();
      break;
  }
}

function listen() {
  numbers.forEach((number) => {
    number.addEventListener("click", () => {
      if (enterNumber.length < 10) {
        enterNumber += number.textContent;
      }

      assignValue(enterNumber);
      updateResultDisplay();
      updateEquationDisplay();
    });
  });

  operators.forEach((operator) => {
    operator.addEventListener("click", () => {
      if (firstOperand !== "") {
        enterNumber = "";
        operation = operator.textContent;
        operation = operation.trim();
        updateResultDisplay();
        updateEquationDisplay();
      }
    });
  });

  equal.addEventListener("click", () => {
    if (operation !== "" && firstOperand !== "" && secondOperand !== "") {
      calculate();
    }
  });

  clear.addEventListener("click", () => {
    reset();
    updateResultDisplay();
    updateEquationDisplay();
  });
}

function reset() {
  enterNumber = "";
  firstOperand = "";
  secondOperand = "";
  currentTotal = "0";
  previousTotal = "";
  operation = "";
}

window.onload = () => {
  listen();
  updateResultDisplay();
};
