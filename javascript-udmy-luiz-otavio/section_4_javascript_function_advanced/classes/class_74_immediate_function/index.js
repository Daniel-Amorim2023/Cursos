// IIFE immediately invoked function expression

(function (nome) {
    function speakshi() {
        console.log('Hi! ' + nome + '!')
    }

    speakshi()
})('Daniel');

let arow;
( arow = (nome) => {
    console.log('Hi! ' + nome + '!');
})('Karina');