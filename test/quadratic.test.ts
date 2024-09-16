import { MathBase } from '../src/sqrt';

describe('MathBase.solveQuadraticEquation', () => {

  test('Должен вернуть два действительных корня, если дискриминант положительный', () => {
    const result = MathBase.solveQuadraticEquation(1, -3, 2);
    expect(result.x1).toBe(2);
    expect(result.x2).toBe(1);
  });

  test('Должен вернуть null для обоих корней, если любой аргумент не является числом', () => {
    const result = MathBase.solveQuadraticEquation(NaN, 2, 3);
    expect(result.x1).toBeNull();
    expect(result.x2).toBeNull();
  });

  test('Должен вернуть null для обоих корней, если дискриминант отрицательный', () => {
    const result = MathBase.solveQuadraticEquation(1, 2, 3);
    expect(result.x1).toBeNull();
    expect(result.x2).toBeNull();
  });
});
