const numberSequencia = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log('');

let n = 0;
while (n < numberSequencia.length) {
// for (let n = 0; n < numberSequencia.length; n++) {
// for (let n in numberSequencia) {
// for (let number of numberSequencia) {
    let number = numberSequencia[n]
    if (number === 2) {
        console.log('Pulei o 2');
        n++;
        continue; // Continue commander jumps an iteration.
    }
    console.log(number);

    if (number === 7) {
        console.log('Encontrei o 7');
        break; // Break comander stops the iteration and exits the 'for structure'.
    }
    n++;
}
console.log('');
