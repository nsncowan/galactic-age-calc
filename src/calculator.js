export default class Calculator {
  constructor(age) {
    this.earthYears = age;
    this.mercuryYears = 0.24;
    this.venusYears = 0.62;
    this.marsYears = 1.88;
    this.jupiterYears = 11.86;
  }

  giveMercuryAge() {
    return this.earthYears / this.mercuryYears;
  }
 
  giveVenusAge() {
    return this.earthYears / this.venusYears;
  }






}