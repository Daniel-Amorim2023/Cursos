const numbers = [1, 5, 12, 4, 61, 20, 10, 45, 79, 75, 65, 13, 19, 23];

// const evenNums = numbers.filter(value => value % 2 === 0);
// const doubleNums = evenNums.map(value => value * 2);
// const sumNums = doubleNums.reduce((counter, value) => {
//     counter += value;
//     return counter;
// })
// console.log(evenNums);
// console.log(doubleNums);
// console.log(sumNums);

const sumDoubleEvenNums = numbers.filter(value => value % 2 === 0)
    .map(value => value*2).reduce((counter, value) => {
        counter += value;
        return counter
    });

console.log(sumDoubleEvenNums);
