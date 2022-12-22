export default class Calculator {
  constructor(age, pastBirthday, futureBirthday) {
    this.earthYears = 1;
    this.mercuryYears = 0.24;
    this.venusYears = 0.62;
    this.marsYears = 1.88;
    this.jupiterYears = 11.86;
    this.age = age;
    this.pastBirthday = pastBirthday;
    this.futureBirthday = futureBirthday;
  }

  giveMercuryAge() {
    return this.age / this.mercuryYears;
  }
 
  giveVenusAge() {
    return this.age / this.venusYears;
  }

  giveMarsAge() {
    return this.age / this.marsYears;
  }

  giveJupiterAge() {
    return this.age / this.jupiterYears;
  }

  yearsPast() {
    const yearsPastGap = this.age - this.pastBirthday;
    const yearsPastArray = [yearsPastGap/this.earthYears, yearsPastGap/this.mercuryYears, yearsPastGap/this.venusYears, yearsPastGap/this.marsYears, yearsPastGap/this.jupiterYears];

    return yearsPastArray;
  }

}