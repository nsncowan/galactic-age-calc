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

  test('should return an array of inputted age converted into planetary years', () => {
    const newCalc = new Calculator(35, 25, 60);
    expect(newCalc.convertEarthYears()).toEqual([35/1, 35/0.24, 35/0.62, 35/1.88, 35/11.86])
  })

  test('should return an array of planetary years for each planet since past birthday', () => {
    const newCalc = new Calculator(35, 25, 60);
    expect(newCalc.yearsPast()).toEqual([(35-25)/1, (35-25)/0.24, (35-25)/0.62, (35-25)/1.88, (35-25)/11.86]);
  });

  test('should return an array of planetary years for each planet until a future birthday', () => {
    const newCalc = new Calculator(35, 25, 60);
    expect(newCalc.yearsToCome()).toEqual([(60-35)/1, (60-35)/0.24, (60-35)/0.62, (60-35)/1.88, (60-35)/11.86]);
  });
  
});