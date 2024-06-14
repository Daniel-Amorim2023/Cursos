const frutas = ['maçã', 'pera', 'morango']; // it's a vetor

// 'for in' reads the index or keys of object.
// objects are things that we can give attributes and methods 

// for (i in frutas) {
//     console.log(frutas[i]);
// }

const pessoa = {
    nome: 'Daniel',
    sobrenome: 'Amorim',
    idade: 26
}

for (chave in pessoa) {
    console.log(pessoa[chave]);
}

