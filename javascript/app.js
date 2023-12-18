const previousInput = document.querySelector("[data-previous-input]");
const currentInput = document.querySelector("[data-current-input]");
const numberBtns = document.querySelectorAll(".num");
const operatorBtns = document.querySelectorAll(".operator");
const deleteBtn = document.querySelector(".delete");
const resetBtn = document.querySelector(".reset");
const equalsBtn = document.querySelector(".equals");

let operation;
let previousOperand = "";
let currentOperand = "";

function appendNumber(number) {
  if (number === "." && currentOperand.includes(".")) {
    return;
  }
  currentOperand = currentOperand.toString() + number.toString();
}

function currentOperation(currentOperation) {
  if (currentOperand == "") {
    return;
  }

  if (previousOperand != "") {
    calculate();
  }

  operation = currentOperation;
  previousOperand = currentOperand;
  currentOperand = "";
}

function calculate() {
  if (!operation || previousOperand === "") {
    return;
  }

  let result;
  let firstOperand = Number(previousOperand);
  let secondOperand = Number(currentOperand);

  if (isNaN(firstOperand) || isNaN(secondOperand)) {
    return;
  }

  switch (operation) {
    case "+":
      result = firstOperand + secondOperand;
      break;

    case "-":
      result = firstOperand - secondOperand;
      break;

    case "x":
      result = firstOperand * secondOperand;
      break;

    case "/":
      result = firstOperand / secondOperand;
      break;
  }

  currentOperand = result;
  operation = undefined;
  previousOperand = "";
  previousInput.innerText = "";
}

function displayNumbers() {
  currentInput.innerText = currentOperand.toLocaleString("en");
  if (operation != undefined) {
    previousInput.innerText = `${previousOperand} ${operation.toString()}`;
  } else {
    previousInput.innerText = previousOperand;
  }
}

numberBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    appendNumber(btn.innerText);
    displayNumbers();
  });
});

operatorBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentOperation(btn.innerText);
    displayNumbers();
  });
});

equalsBtn.addEventListener("click", () => {
  calculate();
  displayNumbers();
});

deleteBtn.addEventListener("click", () => {
  currentOperand = currentOperand.toString().slice(0, -1);
  displayNumbers();
});

resetBtn.addEventListener("click", () => {
  previousOperand = "";
  currentOperand = "";
  operation = undefined;
  displayNumbers();
});
