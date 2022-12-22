import { TestScheduler } from "jest";
import Calculator from "../src/calculator";

describe('Calculator', () => {

  test('should correctly create a calculator object with year equivalences', () => {
    const calculator = new Calculator(35, 25, 65);
    expect(calculator.earthYears).toEqual(1);
    expect(calculator.mercuryYears).toEqual(0.24);
    expect(calculator.venusYears).toEqual(0.62);
    expect(calculator.marsYears).toEqual(1.88);
    expect(calculator.jupiterYears).toEqual(11.86);
    expect(calculator.pastBirthday).toEqual(25);
    expect(calculator.futureBirthday).toEqual(65);
  });

  test('should convert an age of 35 earth years to mercury years (35 / 0.24)', () => {
    const newCalc = new Calculator(35);
    expect(newCalc.giveMercuryAge()).toEqual(35 / 0.24);
  });

  test('should convert an age of 35 earth years to venus years (35 / 0.62)', () => {
    const newCalc = new Calculator(35);
    expect(newCalc.giveVenusAge()).toEqual(35 / 0.62);
  });

  test('should convert an age of 35 earth years to mars years (35 / 1.88)', () => {
    const newCalc = new Calculator(35);
    expect(newCalc.giveMarsAge()).toEqual(35 / 1.88);
  });

  test('should convert an age of 35 earth years to jupiter years (35 / 11.86)', () => {
    const newCalc = new Calculator(35);
    expect(newCalc.giveJupiterAge()).toEqual(35 / 11.86);
  });

  test('should return an array of planetary years for each planet since past birthday', () => {
    const newCalc = new Calculator(35, 25, 60);
    expect(newCalc.yearsPast()).toEqual([(35-25)/1, (35-25)/0.24, (35-25)/0.62, (35-25)/1.88, (35-25)/11.86]);
  });

});