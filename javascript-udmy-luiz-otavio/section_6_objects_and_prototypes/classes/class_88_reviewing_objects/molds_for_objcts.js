function ObjectConstruct (name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.speaksName = function () {
        return (`${this.name} speaks object construct`);
    };
    this.getDateOfBirth = function () {
        const date = new Date();
        return date.getFullYear() - this.age;
    }
    Object.freeze(this);
}

// The command 'new' creates empty object attaches the 'this command' and afeter returns the 'this command' 
const person1 = new ObjectConstruct('Daniel', 26, 1.8);
// Object.freeze(person1);
person1.name = 'Other name'
console.log(person1.speaksName())
console.log(person1.getDateOfBirth())



////////////////////////////Factory functions////////////////////////////////

// function objectFactory (name, age, height) {
//     return {
//         name, age, height,
//         getDateOfBirth () {
//             const date = new Date();
//             return date.getFullYear() - this.age
//         },
//         get speaksName () {
//             return (`${this.name} speaked!`)
//         }
//     }
// }

// const person1 = objectFactory('Daniel', 26, 1.8);
// const person2 = objectFactory('Karina', 25, 1.8);

// console.log(person1.getDateOfBirth());
// console.log(person1.speaksName);
