import Calculator from "./calculator";





function handleForm(event) {
  event.preventDefault();
  let currentAge = document.querySelector('#currentAge').value;
  let pastAge = document.querySelector('#pastAge').value;
  let futureAge = document.querySelector('#futureAge').value;
  let calculator = new Calculator(currentAge, pastAge, futureAge);
  let planetaryAgeArray = calculator.convertEarthYears(currentAge);
  let pastAgeArray = calculator.yearsPast(pastAge);
  let futureAgeArray = calculator.yearsToCome(futureAge);

  let ulAge = document.createElement('ul');
  planetaryAgeArray.forEach(function(element) {
    let li = document.createElement('li');
    li.append(element);
    ulAge.append(li);
  });
  
  let ulPast = document.createElement('ul');
  pastAgeArray.forEach(function(element) {
    let li = document.createElement('li');
    li.append(element);
    ulPast.append(li);
  });

  let ulFuture = document.createElement('ul');
  futureAgeArray.forEach(function(element) {
    let li = document.createElement('li');
    li.append(element);
    ulFuture.append(li);
  });

  document.querySelector('#ageResult').append(ulAge);
  document.querySelector('#pastAgeResult').append(ulPast);
  document.querySelector('#futureAgeResult').append(ulFuture);
}

window.addEventListener("load", function() {
  let form = document.querySelector('form');
  form.addEventListener("submit", handleForm);
})