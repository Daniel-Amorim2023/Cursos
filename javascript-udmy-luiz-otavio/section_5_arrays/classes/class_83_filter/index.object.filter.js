const people = [
    {name: 'Rosana', idade: 47},
    {name: 'Romário', idade: 60},
    {name: 'Ingrind', idade: 19},
    {name: 'Roberto', idade: 34},
    {name: 'Ayla', idade: 45},
    {name: 'Ronaldo', idade: 24},
    {name: 'Caroline', idade: 16},
    {name: 'Osmar', idade: 24},
    {name: 'Marcelo', idade: 35},
    {name: 'Bia', idade: 15},
]

const shortNames = people.filter(Object => Object.idade < 30);
// const shortNames = people.filter(Object => Object.name.length <= 4);
// const shortNames = people.filter(Object => Object.idade <= 30 && Object.name.length > 6);
const endNamesWithA = people.filter(Object => Object.name.toLowerCase().endsWith('a'));


console.log(shortNames, `There are ${shortNames.length} people with under 30 years old`); 
console.log(endNamesWithA, `There are ${endNamesWithA.length} people with names ending in the letter 'a'`);