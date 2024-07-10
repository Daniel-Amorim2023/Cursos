const numbers = [1, 5, 12, 4, 61, 20, 10, 45, 79, 75, 65, 13, 19, 23];

// const reduceNum = numbers.reduce(function (counter, value, index, arrays) {
// console.log(counter);
// }, 0)

// const reduceNum = numbers.reduce(function (counter, value) {
//     counter += value;
//     return counter;
//     }, 0)

// const reduceNum = numbers.reduce(function (counter, value) {
//     if (value % 2 !== 0) counter += value
//     return counter
// }, 0)

// const reduceNum = numbers.reduce(function (counter, value) {
//     if (value % 2 !== 0) counter.push(value);
//     return counter
// }, []) // -> It is prefer to use filter.

// const reduceNum = numbers.reduce(function (counter, value) {
//     counter.push(value * 2);
//     return counter
// }, []) // -> It's prefer to use map

// const reduceNum = numbers.reduce((counter, value) => {
//     counter += value
//     return counter
// })

const people = [
    {name: 'Rosana', age: 47},
    {name: 'Romário', age: 60},
    {name: 'Ingrind', age: 19},
    {name: 'Roberto', age: 34},
    {name: 'Ayla', age: 45},
    {name: 'Ronaldo', age: 24},
    {name: 'Caroline', age: 16},
    {name: 'Osmar', age: 24},
    {name: 'Marcelo', age: 35},
    {name: 'Bia', age: 15},
];

const olderPerson = people.reduce((counter, value) => {
    const person = ''
    if (counter.age > value.age) return counter;
    return value;
})

console.log(olderPerson)