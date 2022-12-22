export default class Calculator {
  constructor(age, pastBirthday, futureBirthday) {
    this.earthYears = age;
    this.mercuryYears = 0.24;
    this.venusYears = 0.62;
    this.marsYears = 1.88;
    this.jupiterYears = 11.86;
    this.pastBirthday = pastBirthday;
    this.futureBirthday = futureBirthday;
  }

  giveMercuryAge() {
    return this.earthYears / this.mercuryYears;
  }
 
  giveVenusAge() {
    return this.earthYears / this.venusYears;
  }

  giveMarsAge() {
    return this.earthYears / this.marsYears;
  }

  giveJupiterAge() {
    return this.earthYears / this.jupiterYears;
  }


}