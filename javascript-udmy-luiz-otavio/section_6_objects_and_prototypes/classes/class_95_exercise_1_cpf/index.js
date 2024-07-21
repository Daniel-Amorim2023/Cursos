let cpf = '146792037';

let sequence = 10
let accumulator = 0;
for (let digit of cpf) {
    accumulator += sequence * digit
    console.log(accumulator, ' ', sequence);
    sequence--;
    
}

let digitFirst = 11 - (accumulator % 11);
if (digitFirst > 9) digitFirst = 0;

let cpf1 = cpf + digitFirst;

console.log('')
sequence = 11
accumulator = 0
for (let digit of cpf1) {
    accumulator += sequence * digit
    console.log(accumulator, ' ', sequence);
    sequence--;
    
}

let digitSecond = 11 - (accumulator % 11);
if (digitSecond > 9) digitSecond = 0;

let cpfValid = cpf1 + digitSecond;
console.log(cpfValid); 

