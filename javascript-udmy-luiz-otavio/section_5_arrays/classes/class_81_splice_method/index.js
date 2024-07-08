// arrays.splice(index, deleted elements, inserted elements )

// const stringNames = 'Julia Gabriel Márcia Geraldo Mônica';
// const names = stringNames.split(' ');
const anotherNames = ['Lucia', 'Osmar', 'Ingrid'];
const names = new Array('Julia', 'Gabriel', 'Márcia', 'Geraldo', 'Mônica', ['Name1', 'Name2']);
// const namesRemoved = names.splice(-1, 1); //Number.MAX_VALUE
// // const replacedName = names.splice(1, 1, 'Antônio');
// names[1] = 'Antônio';
const RemovedNames = names.splice(-2, 2, ...anotherNames); 


console.log(names);
// console.log(namesRemoved);
// // console.log(replacedName);


// const names = new Array('Julia', 'Gabriel', 'Márcia', 'Geraldo', 'Mônica');

// names.splice(-1, 1); // = names.pop();
// names.splice(0, 1); // = names.shift();
// names.splice(names.length, 0, 'João'); // names.push('João');
// names.splice(0, 0, 'Daniela'); // names.unshift('Daniela');

// // result -> names['Daniela', 'Gabriel', Márcia', Geraldo', 'João'];
// console.log(names);