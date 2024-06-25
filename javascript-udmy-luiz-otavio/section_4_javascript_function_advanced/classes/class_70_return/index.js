// return
// returns a value
// Ends a function

// we can create functions that returned value or do anything.
// example:


// Example of a function that return a value
// ex1
function sum (a, b) {
    return a + b
}

sum(2, 3);

// ex2
function returnLiteralValue (nome, sobrenome) {
    return {nome, sobrenome};
}

console.log(returnLiteralValue('Daniel', 'Amorim'));
// ex3

function speaksPhrase(phrase) {
    function speaksrest(rest) {
        return phrase + ' ' + rest
    }
    return speaksrest
}

const phrase = speaksPhrase('Phrase');
console.log(phrase('rest of phrase'));

// ex4
// function double (n) {
//     return n * 2;
// }

// function triple (n) {
//     return n * 3;
// }

// function quadruple (n) {
//     return n * 4;
// }

// console.log(double(2));
// console.log(triple(2));
// console.log(quadruple(2));

function createMultiplication (multiplier) {
    return function(n) {
        return multiplier * n;
    }
}

const double = createMultiplication(2);
const triple = createMultiplication(3);
const quadruple = createMultiplication(4);

console.log(double(2));
console.log(triple(2));
console.log(quadruple(2));



// -----------------------------------------------------------
// example of a function that doesn't return a value
// ex 1
console.log('')
function displayingSum (a, b) {
    console.log(a + b);
}

displayingSum(2, 3);


// ex 2
// function changingColorBody () {  
//     document.addEventListener('click', function () {
//     document.body.style.backgroundColor = 'red';
//     })
// }

// changingColorBody()
 