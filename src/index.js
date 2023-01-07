import Calculator from "./calculator";





function handleForm(event) {
  event.preventDefault();
  let currentAge = document.querySelector('#currentAge').value;
  let pastAge = document.querySelector('#pastAge').value;
  let futureAge = document.querySelector('#futureAge').value;
  let calculator = new Calculator(currentAge, pastAge, futureAge);
  let printCurrentAge = calculator.
  let printPastAge
  let printFutureAge
}