// addition

// substraction

// division

// multiplication

const textArea = document.getElementById("equation");
textArea.value;

const allClear = document.querySelector(".all-clear");
allClear.addEventListener("click", () => {
  textArea.value = "";
});

const num = document.querySelectorAll(".num");
num.forEach((num) => {
  num.addEventListener("click", () => {
    textArea.value += num.textContent;
  });
});

const op = document.querySelectorAll(".op");
op.forEach((op) => {
  op.addEventListener("click", () => {
    textArea.value += op.textContent;
  });
});

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const operator = textArea.value.filter(
  (operator) => !numbers.includes(operator)
);

const splitting = textArea.value.split(/[+-÷×]/);
const firstOp = +splitting[0];
const secondOp = +splitting[1];

const equalTo = document.querySelector(".equal-to");
equalTo.addEventListener("click", () => {
  switch (operator) {
    case "+":
      textArea.value += firstOp + secondOp;
      break;
    case "-":
      textArea.value += firstOp - secondOp;
      break;
    case "×":
      textArea.value += firstOp * secondOp;
      break;
    case "÷":
      textArea.value += firstOp / secondOp;
      break;
  }
});
/*
//filter operator
function getOperator() {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operator = textArea.value.filter(
    (operator) => !numbers.includes(operator)
  );
}

//filter numbers
function splitOperators() {
  const splitting = textArea.value.split(/[+-÷×]/);
  const firstOp = +splitting[0];
  const secondOp = +splitting[1];
}
*/

/*
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const operator = textArea.value.filter(
  (operator) => !numbers.includes(operator)
);

const splitting = textArea.value.split(/[+-÷×]/);
const firstOp = +splitting[0];
const secondOp = +splitting[1];

function operates(firstOp, secondOp, operator) {
  switch (operator) {
    case "+":
      textArea.value += firstOp + secondOp;
      break;
    case "-":
      textArea.value += firstOp - secondOp;
      break;
    case "×":
      textArea.value += firstOp * secondOp;
      break;
    case "÷":
      textArea.value += firstOp / secondOp;
      break;
  }
}
*/
//equalTo loop the textArea string splitting by operator delimiting
//store the value from the left side numbers and another from the right side numbers, including dot
//convert them to numeric values
//store the operator found
//call the function assigned to the delimiting operator (may be a switch one)
//run it using both stored values as parameters
//if no operator is found, add input to textArea.value
//add the result replacing the textArea.value and print the input above the result using a smaller font size

/*
const buttonsContainer = document.querySelector(".buttons");

const buttons = buttonsContainer.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent !== "=" || button.textContent !== "AC") {
      textArea.value += button.textContent;
    }
  });
});
*/
