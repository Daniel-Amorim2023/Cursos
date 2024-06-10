// We use the characters '?' and ':' to creat ternary operation.

let pontuacaoUsuario = 1000;

if (pontuacaoUsuario > 1000) {
    console.log('Usuário vip');
} else {
    console.log('Usuário normal');
}

// for examplo: (condition) ? 'Value for true' : 'Value for false';

let nivelUsuario = pontuacaoUsuario > 1000 ? 'Usuário vip' : 'Usuário normal';

console.log(nivelUsuario)

// Another examplo:

const corUsuario = null;
const corPadrao = corUsuario || 'Preto';

console.log(corPadrao);