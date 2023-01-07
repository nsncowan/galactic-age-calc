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

  convertEarthYears() {
    const yearConversion = [`Earth Years: ${this.age/this.earthYears}`, `Mercury Years: ${this.age/this.mercuryYears}`, `Venus Years: ${this.age/this.venusYears}`, `Mars Years: ${this.age/this.marsYears}`, `Jupiter Years: ${this.age/this.jupiterYears}`];
    return yearConversion;
  }


  yearsPast() {
    const yearsPastGap = this.age - this.pastBirthday;
    const yearsPastArray = [`Earth Years: ${yearsPastGap/this.earthYears}`, `Mercury Years: ${yearsPastGap/this.mercuryYears}`, `Venus Years: ${yearsPastGap/this.venusYears}`, `Mars Years: ${yearsPastGap/this.marsYears}`, `Jupiter Years: ${yearsPastGap/this.jupiterYears}`];
    return yearsPastArray;
  }

  yearsToCome() {
    const yearsToComeGap = this.futureBirthday - this.age;
    const yearsToComeArray = [`Earth Years: ${yearsToComeGap/this.earthYears}`, `Mercury Years: ${yearsToComeGap/this.mercuryYears}`, `Venus Years: ${yearsToComeGap/this.venusYears}`, `Mars Years: ${yearsToComeGap/this.marsYears}`, `Jupiter Years: ${yearsToComeGap/this.jupiterYears}`];
    return yearsToComeArray;
  }

}