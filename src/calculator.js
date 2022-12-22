export default class Calculator {
  constructor(age) {
    this.earthYears = age;
    this.mercuryYears = age/0.24;
    this.venusYears = age/0.62;
    this.marsYears = age/1.88;
    this.jupiterYears = age/11.86;
  }

  giveMercuryAge() {
    return this.mercuryYears;
  }
 
  giveVenusAge() {
    return this.venusYears;
  }






}