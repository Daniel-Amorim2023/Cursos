function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData (data) {
    const day = zeroAEsquerda(data.getDate());
    const month = zeroAEsquerda(data.getMonth() + 1);
    const year = zeroAEsquerda(data.getFullYear());
    const hour = zeroAEsquerda(data.getHours());
    const minute = zeroAEsquerda(data.getMinutes());
    const second = zeroAEsquerda(data.getSeconds());

    return `${day}/${month}/${year} ${hour}:${minute}:${second}`
}

const data = new Date();
const dataBrasil = formataData(data);

console.log(dataBrasil);