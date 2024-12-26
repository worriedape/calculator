const textArea = document.getElementById("equation");
textArea.value;

const allClear = document.querySelector(".all-clear");
allClear.addEventListener("click", () => {
  textArea.value = "";
});

let = document.querySelectorAll(".num");
let.forEach((num) => {
  num.addEventListener("click", () => {
    textArea.value += num.textContent;
  });
});

let = document.querySelectorAll(".op");
let.forEach((op) => {
  op.addEventListener("click", () => {
    textArea.value += op.textContent;
  });
});

let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let operants = /[+\-÷×]/g;
let operator = function () {
  return textArea.value
    .split("")
    .filter((num) => !numbers.includes(num))
    .join();
};

let splitting = function () {
  return textArea.value.split(operants);
};
let firstOp = () => +splitting()[0];
let secondOp = () => +splitting()[1];

const equalTo = document.querySelector(".equal-to");
equalTo.addEventListener("click", () => {
  switch (operator()) {
    case "+":
      textArea.value = `${firstOp() + secondOp()}`;
      break;
    case "-":
      textArea.value = `${firstOp() - secondOp()}`;
      break;
    case "×":
      textArea.value = `${firstOp() * secondOp()}`;
      break;
    case "÷":
      textArea.value = secondOp() === 0 ? "Error" : `${firstOp() / secondOp()}`;
      break;
  }
});

//equalTo loop the textArea string splitting by operator delimiting
//store the value from the left side numbers and another from the right side numbers, including dot
//convert them to numeric values
//store the operator found
//call the function assigned to the delimiting operator (may be a switch one)
//run it using both stored values as parameters
//if no operator is found, add input to textArea.value
//add the result replacing the textArea.value and print the input above the result using a smaller font size
