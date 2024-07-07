// function* generator () {
//     // Any code
//     yield 'Value 1';
//     // Any code
//     yield 'Value 2';
//     // Any code
//     yield 'Value 3';
// }

// const g1 = generator();
// console.log(g1.next().value);

// for (let value of g1) console.log(value); 

///////////////////////////////////////////////////////////////////////////////////////

// function* generator2 () {
//     let counter = 0;
//     while (true) {
//         yield counter;
//         counter++;
//     }
// }

// const g2 = generator2();
// console.log(g2.next().value);
// console.log(g2.next().value);

// for (let start = 0; start < 10; start++) console.log(g2.next().value);

///////////////////////////////////////////////////////////////////////////////////////

// function* generator3 () {
//     yield 0;
//     yield 1;
//     yield 2;
// }

// function* generator4 () {
//     yield* generator3();
//     yield 3;
//     yield 4;
//     yield 5;
// }

// const g4 = generator4();
// for(let value of g4) console.log(value);

///////////////////////////////////////////////////////////////////////////////////////

function* generator5() {
    yield function () {
        console.log('yield 1');
    };

    yield function () {
        console.log('yield 2');
    }

}

const g5 = generator5();
const g5Function1 = g5.next().value
const g5Function2 = g5.next().value

g5Function1();
g5Function2();