// const names = ['Maria', 'João', 'Geovana', 'Robson']; -> Literal form
// const names = new Array('Maria', 'João', 'Geovana', 'Robson'); // -> constructive form


// Arrays are values passed by reference, so averything that is done in newNames will also be reflected in names. 

// //////////////////////////////////////////////////////////////////////////////////


//     example:

// const newNames = names;

// newNames.pop();
// console.log(names);

// //////////////////////////////////////////////////////////////////////////////////

// To copy names to new names we need to use the spread operator(...)


// //////////////////////////////////////////////////////////////////////////////////


//     example:

// const newNames = [...names];

// newNames.pop();

// console.log('names: ' + names);
// console.log('\n' + 'newNames: ' + newNames);

// //////////////////////////////////////////////////////////////////////////////////

// console.log(names);

// names[0] = 'Juliana';
// names[1] = names[3];
// delete names[2];
// const removidLast = names.pop()
// const removidFirst = names.shift();
// names.push('Rosane');
// names.push('Ceará');
// names.push('Lucas');
// names.unshift('Matheus') // Be veru carefull with unshift becouse as it can cause performance problems.

// console.log('Length: ' + names.length); // we don't use parentheses because it is an attribute and no a method
// console.log(names, removidLast);
// console.log(names, removidFirst);
// console.log(names);

// // Arrays slicing

// const sliceNames = names.slice(1, 4);
// const sliceNames2 = names.slice(0, -1); // remove the item last
// const sliceNames3 = names.slice(1, -2); // remove the two item last
// const sliceNames4 = names.slice(1, -1); // remove the begnning and end
// const sliceNames5 = names.slice(2, names.length);


// console.log(sliceNames);
// console.log(sliceNames2);
// console.log(sliceNames3);
// console.log(sliceNames4);
// console.log(sliceNames5);

// const name = 'Daniel da Silva Lemos Amorim';
// const nameWithComma = 'Daniel, da, Silva, Lemos, Amorim';
// const names = name.split(' ');
// const names2 = nameWithComma.split(',');

// console.log(names);
// console.log(names2);

// const name3 = names.join('-');
// console.log(name3);

