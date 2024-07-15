// prototype defintion
// Prototype is a term used to refer to what was first created, serviring as a model or mold for future productions

// Every object has an internal reference to a prototype (__proto__) that comes from the construct function property that was used to create it. When we try to access a member of an object, first the javaScrip enginer will try to find this member in the object itself and the prototype chains is used up to the top (null) until it finds (or not) that member.





// construct function
function Person (name, surname) {
    this.name = name;
    this.surname = surname;
    // this.fullName = () => `original ${this.name} ${this.surname}`;
}

// The engine javaScript finds first 'p1' --> 'p1.prototype' --> 'object.prototype'

// Person.prototype === p1.__proto__

Person.prototype.fullName = () => `${this.name} ${this.surname}`;

// instance
const p1 = new Person ('Eduardo', 'Coutrin de oliveira');
const p2 = new Person ('Elizabeth', 'Amaro dos Santos');

console.dir(p1);
console.dir(p2);
