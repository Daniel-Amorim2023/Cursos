// When we instantiate a class we are creating an object.

class Person {
    constructor (name, surname) {
        this.name = name,
        this.surname = surname
    }

    personIsSpeaking () {
        console.log(`${this.name} is speaking`);
    }

    personIsDrinking () {
        console.log(`${this.name} is drinking`);
    }

    personIsEating () {
        console.log(`${this.name} is eating`);
    }
}

const p1 = new Person('Daniel', 'Amorim');
console.log(p1.__proto__);