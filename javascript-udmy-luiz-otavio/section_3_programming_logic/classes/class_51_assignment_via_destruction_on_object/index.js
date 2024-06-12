const pessoa = {
    nome: 'Daniel',
    sobrenome: 'Amorim',
    idade: 26,
    altura: 1.8,
    endereco: {
        rua: 'Av. Nossa Senhora Das Graças',
        num: 1288,
        cep: '25510-240'
    }

}

const {nome, idade: outroNome, altura = 'não tem', ...rest} = pessoa

console.log(nome, outroNome, altura, rest);

console.log('');

const {endereco: {cep}} = pessoa
console.log(cep)