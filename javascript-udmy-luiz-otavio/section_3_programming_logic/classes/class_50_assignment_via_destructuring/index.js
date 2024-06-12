let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let [number1, number2, ...resto] = numbers;  // (...) is rest operator
// Rest operator must be last element.
// (...) is also spread operator
let [number3, , number5] = resto

console.log(number1, number2);
console.log(resto);
console.log(number3, number5);

const numbersArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log('');
const [,[,,numberArrays6]] = numbersArrays;

console.log(numberArrays6);

const test = [1, 2];
const [num1, num2, num3 = 'não existe'] = test;

console.log(num1, num2, num3)
