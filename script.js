// addition

// substraction

// division

// multiplication

const textArea = document.getElementById("equation");
textArea.value;
//const equalTo 

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

const equalTo = document.querySelector(".equal-to");
equalTo.addEventListener("click", ()=> {
  let calculo = +textArea.value;
  textArea.value += `${equalTo.textContent}  ${+calculo}`;
})


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
