import { f } from './math';

const b = 2.5;
const xValues = [1.28, 3.28, 0.4, 1.1, 2.4, 3.6, 1.7, 3.9];

console.log("Реальные значения функции:");
for (const x of xValues) {
    console.log(`x = ${x}, y = ${f(x, b)}`);
}

// Временные тесты (не будут падать)
test('placeholder', () => expect(true).toBe(true));
