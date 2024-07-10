let text = "Uma das características que me fizeram querer ser um programador é que a tecnologia não para de evoluir. Hoje eu tenho 25 anos de idade e quando olho para o passado não muito distante, fico impressionado em como o mundo mudou desde a minha infância. Hoje temos fácil acesso a internet, notebooks, smartphones, tablets… uau, posso passar o dia inteiro listando tudo o que mudou. E acredito que o fato da tecnologia estar em constante evolução também é o atrativo para muitos que escolhem seguir essa área de conhecimento. É empolgante pensar nas possibilidades e poder fazer parte dessa evolução. E é exatamente por essa razão que hoje gostaria de fazer uma reflexão com vocês sobre amar a tecnologia e não UMA tecnologia. dia"

// let text = 'Olá, mundo! Venho comunicar o meu entusiasmo com a programação. Programo a mais de 2 anos, aprendendo cada vez mais sobre o universo da programação';

for (let letter of text) {
    text = text.replace(',', '').replace('!', '').replace('.', '').replace('?');
}

let letters = text.split(' ');
// console.log(letters);
let word = 'dia';

const filterLetters = letters.filter(value => value === word);
console.log(`The word ${word} is repeated ${filterLetters.length} twice`);

