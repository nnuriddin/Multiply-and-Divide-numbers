let outputtext = document.getElementById("outputtext");
let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let multiplyBtn = document.getElementById("multiplyBtn");
let divideBtn = document.getElementById("divideBtn");

multiplyBtn.addEventListener("click", function () {
  let result = firstNumber.value * secondNumber.value;
  outputtext.innerHTML = result;
});

divideBtn.addEventListener("click", function () {
    let result = firstNumber.value / secondNumber.value;
    outputtext.innerHTML = result;
});