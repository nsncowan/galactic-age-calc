import { TestScheduler } from "jest";
import Calculator from "../src/calculator";

describe('Calculator', () => {

  test('should correctly create a calculator object with year equivalences', () => {
    const calculator = new Calculator(35);
    expect(calculator.earthYears).toEqual(35);
    expect(calculator.mercuryYears).toEqual(0.24);
    expect(calculator.venusYears).toEqual(0.62);
    expect(calculator.marsYears).toEqual(1.88);
    expect(calculator.jupiterYears).toEqual(11.86);
  });

  test('should convert an age of 35 earth years to mercury (35 / 0.24)', () => {
    const newCalc = new Calculator(35);
    expect(newCalc.giveMercuryAge()).toEqual(35 / 0.24);
  })

  test('should convert an age of 35 earth years to venus (35 / 0.62)', () => {
    const newCalc = new Calculator(35);
    expect(newCalc.giveVenusAge()).toEqual(35 / 0.62);
  })

  test('should convert an age of 35 earth years to mars (35 / 1.88)', () => {
    const newCalc = new Calculator(35);
    expect(newCalc.giveMarsAge()).toEqual(35 / 1.88);
  })




});