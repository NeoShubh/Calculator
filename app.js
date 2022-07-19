//declare variables
let num1 = "";
let num2 = "";
let operator = "";
let total = "";

//handle whether user enter number or operator

$(document).ready(function () {
  $("button").on("click", function (e) {
    let btn = e.target.innerHTML;
    if (btn >= "0" && btn <= "9") {
      handleNumber(btn);
    } else {
      handleOperator(btn);
    }
  });
});
//handle number here
function handleNumber(num) {
  if (num1 === "") {
    num1 = num;
  } else {
    num2 = num;
  }
  displayButton(num);
}
//handle operator
function handleOperator(oper) {
  if (operator === "") {
    operator = oper;
  } else {
    handleTotal();
    operator = oper;
  }
}
//total result
function handleTotal() {
  switch (operator) {
    case "+":
      total += +num1 + +num2;
      displayButton(total);
      break;
    case "-":
      total += +num1 - +num2;
      displayButton(total);
      break;
    case "/":
      total += +num1 / +num2;
      displayButton(total);
      break;
    case "*":
      total += +num1 * +num2;
      displayButton(total);
      break;
  }

  updateVariables();
}

function displayButton(btn) {
  $(".input").text(btn);
}

function updateVariables() {
  num1 += total;
  num2 = "";
}
//button to refresh the site once after the task
function refresh() {
  location.reload();
}
