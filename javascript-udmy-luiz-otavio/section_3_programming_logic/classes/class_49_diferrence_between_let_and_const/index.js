// Var and let are commands that declare a variable.

// let:
// * It declares a variable and the variable cannot be redeclared.
// * it has a block scope


//  for example:
let nome = 'Daniel';
// let nome = 'João'; if you redeclares the variavle, an error will occur.
console.log(nome);

if (true) {
    let nome = 'João'; // It's other variable.
    console.log(nome);
}



// Var:
// * it declares a variable and the variable can be redeclared.
// * it has only function scope.
