import { TestScheduler } from "jest";
import Calculator from "../src/calculator";

describe('Calculator', () => {

  test('should correctly create a calculator object with year equivalences', () => {
    const calculator = new Calculator();
    expect(calculator.earthYears).toEqual(1);
    expect(calculator.mercuryYears).toEqual(0.24);
    expect(calculator.venusYears).toEqual(0.62);
    expect(calculator.marsYears).toEqual(1.88);
    expect(calculator.jupiterYears).toEqual(11.86);
  });

  test('should convert inputted age into mercury years')
    const mercuryCalc = new Calculator();
    const input = 35;
    const planet = 'mercury';
    Calculator.giveAge(planet, input);
    expect(mercuryCalc.giveAge('mercury', 35)).toEqual(145.83);

});