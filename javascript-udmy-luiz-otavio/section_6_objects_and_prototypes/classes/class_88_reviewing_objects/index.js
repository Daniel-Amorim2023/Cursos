
const objectPerson = new Object();
objectPerson.name = 'João';
objectPerson.age = 27;
objectPerson.height = 1.8;
objectPerson.speaksName = function () {
    return (`${this.name} está falando!`)
}
objectPerson.getDateOfBirth = function () {
    const currentDate = new Date();
    console.log(this.age);
    return currentDate.getFullYear() - this.age;
}

console.log(objectPerson.getDateOfBirth());

// Literal creation
// const objectPerson = {
//     nome: 'João',
//     age: 27,
//     height: 1.8
// }


// const key = 'altura';

// console.log(objectPerson.nome); // accessing a key pair by point annotation
// console.log(objectPerson['idade']); // accessing a key pair by brackets
// console.log(objectPerson[key]); // accessing a pair of key dynamically
// console.log(objectPerson);
// delete objectPerson.height;
// console.log(objectPerson);
// console.log(`${objectPerson.name}'s age is ${objectPerson.getDateOfBirth()} years`);

for (let key in objectPerson) {
    console.log(objectPerson[key]);
}