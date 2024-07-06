// constructor functions

function person (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.method = function () {
        console.log(`${this.nome}: I'm first method!`)
    }

    this.method2 = () => {
        console.log(`${this.nome}: I'm second method!`);
    }
}

const p1 = new person ('Daniel', 'Amorim');
const p2 = new person ('Karina', 'Santos');

p1.method
p2.method