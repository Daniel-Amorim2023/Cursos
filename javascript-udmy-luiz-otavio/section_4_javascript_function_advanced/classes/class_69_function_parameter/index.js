function functionEx () {
    console.log("Even if you send an argument without paramete, no erro occurs")
};

functionEx ('um argumento', 1, 2, 10);

// we can use this property. example:
console.log('');
function functionEx2 () {
    console.log(arguments);
    let sum = 0;
    for (let num of arguments) {
        sum += num;
    }
    console.log(`The result of sum is ${sum}`);
}

functionEx2(1, 2, 3, 4, 5, 6);

// ------------------------------------------------

// send more arguments than parameters.
console.log('');
function functionEx3 (a, b, c) {
    console.log(a, b, c, arguments);
}

functionEx3(1, 2, 3, 4, 5, 6);

// Send less arguments than parameters.
console.log('');
function functionEx4 (a, b, c, d, e) {
    console.log(a, b, c, d, e);
}

functionEx4(1, 2, 3);

// we can set the parameter value.
console.log('');
function sun (a, b=2, c=4) {
    console.log(a + b + c);
}

sun(1);
sun(2, undefined, 2);

// -----------------------------------------------------------------
// assignment via destructuring
console.log('');
function personRegistration ({name, surname, age}) {
    console.log(name, surname, age);
}

// personRegistration({name:"Daniel", surname:"Amorim", age:26});
const person = {
    name:'Daniel',
    surname:'Amorim',
    age:26
}

personRegistration(person);

// Assignment via destructuring by array
console.log('');
function fruitList ([fruit1, fruit2, fruit3]) {
    console.log(fruit1, fruit2, fruit3);
}

fruits = ['apple', 'banana', 'grape'];
// fruitList(['apple', 'banana', 'grape']); literary value
fruitList(fruits);

// -------------------------------------------------------
console.log('');

// (...) it's rest operator

const account = (operator, accumulator, ...numbers) => {
// const account = function (operator, accumulator, ...numbers) {
// function account (operator, accumulator, ...numbers) {
    for (let number of numbers) {
        if (operator === '+') accumulator += number;
        if (operator === '-') accumulator -= number;
        if (operator === '/') accumulator /= number;
        if (operator === '*') accumulator *= number;
    }
    console.log(accumulator)
};

account('+', 2, 3, 4, 6); // expected 15
account('-', 2, 3, 4, 6); // expected -11
account('/', 2, 3, 4, 6); // expected 0.027
account('*', 2, 3, 4, 6); // expected 144