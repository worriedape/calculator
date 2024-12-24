// addition

// substraction

// division

// multiplication

const textArea = document.getElementById("equation");
textArea.value = "";
//const equalTo = document.querySelector(".equal-to");

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
