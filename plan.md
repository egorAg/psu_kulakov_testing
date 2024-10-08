# План тестирования

## Перечень тестов

### Модуль примера (MathBase)

#### 1. Метод `solveQuadraticEquation(a: number, b: number, c: number): { x1: number | null, x2: number | null }`

**Тест №1.1 PositiveRoots (позитивный)**

- **Цель:** Проверка правильности вычисления двух действительных корней при положительном дискриминанте.
- **Входные данные:** Коэффициенты уравнения, например, `a = 1`, `b = -3`, `c = 2`.
- **Ожидаемый результат:** 
  - Корни: `x1 = 2` и `x2 = 1`.
- **Описание процесса:** Используется стандартный вызов функции с проверкой возвращаемых значений. Проверяются корректность вычисления двух корней уравнения.

**Тест №1.2 NotANumber (позитивный)**

- **Цель:** Проверка обработки нечисловых значений в качестве коэффициентов.
- **Входные данные:** Коэффициенты уравнения, например, `a = NaN`, `b = 2`, `c = 3`.
- **Ожидаемый результат:** 
  - Корни: `x1 = null` и `x2 = null`.
- **Описание процесса:** Используется стандартный вызов функции с проверкой возвращаемых значений. Предварительно требуется убедиться, что один из коэффициентов является нечисловым.

**Тест №1.3 NegativeDiscriminant (позитивный)**

- **Цель:** Проверка правильности обработки случая с отрицательным дискриминантом, когда корней нет.
- **Входные данные:** Коэффициенты уравнения, например, `a = 1`, `b = 2`, `c = 3`.
- **Ожидаемый результат:** 
  - Корни: `x1 = null` и `x2 = null`.
- **Описание процесса:** Используется стандартный вызов функции с проверкой возвращаемых значений. Проверяется корректность обработки случая, когда дискриминант меньше нуля.

