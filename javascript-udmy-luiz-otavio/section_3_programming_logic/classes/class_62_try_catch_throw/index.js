function sum (num1, num2) {
    if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
        throw new Error;('num1 e num2 precisam ser números');
    }
    return num1 + num2;
}

console.log(sum("2", 3));





// let noExist = 'Exist'
// try {
//     console.log(noExist);
// } catch(error){
//     console.log('Occurred an error');
// }