// const numbers = [1, 5, 12, 4, 61, 20, 10, 45, 79, 75, 65, 13, 19, 23];

// const doubleNumber = numbers.map(value => value * 2);
// console.log(doubleNumber);

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

const changingPeople = people.map( object =>  ({age: object.age}));
// const changingPeople2 = people.map( object => {
//     object.name = 'unnamed';
//     return object;
// });

// const changingPeople3 = people.map( (object, index) => ({id: index + 1, name: object.name, age: object.age}));

// const changingPeople3 = people.map( function (object, index) {
//     object.id = index;
//     return object;
// });

const changingPeople3 = people.map( function (object, index) {
    const newpeople = {...object};
    newpeople.id = index; 
    return newpeople;
});

// const changingPeople3 = people.map( (object, index) => ({id: (function () {
//     const num = Math.random() * 30 + 10;
//     return Math.floor(num);
// })(), name: object.name, age: object.age}))

console.log(changingPeople)
// console.log(changingPeople2)
console.log(changingPeople3)
console.log(people)
