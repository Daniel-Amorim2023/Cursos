const people = [
    {id:3, name:'Robert', surname:'cardoso'},
    {id:2, name:'Osmar', surname:'Reis'},
    {id:1, name:'Jennifer', surname:'Lopes'}
];

const newPeople = new Map();

for (const person of people) {
    const {id} = person;
    newPeople.set(id, {...person});
}

for (const person of newPeople.values()) {
    console.log(person);
}

// const newPeople = {};

// for (const person of people) {
//     const {id} = person;
//     newPeople[id] = {...person};
// }

// for (const {id, name, surname} of people) {
//     newPeople[id] = {id, name, surname};
// }


