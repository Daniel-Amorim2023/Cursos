// const cpf = '146.792.037-14';
const cpf = '176.845.437-09';
// const cpf = '111.111.111-11';

function CreatCpf (cpfSend) {
    Object.defineProperty(this, 'cleanCpf', {
        enumerable: true,
        get: function () {
            return cpfSend.replace(/\D+/g, '');
        }
    })
}

CreatCpf.prototype.cpfValid = function () {
    if (typeof this.cleanCpf === 'undefined') return false;
    if (this.cleanCpf.length !== 11) return false;
    if (this.isSequence()) return false;

    const partialCpf = this.cleanCpf.slice(0, -2);
    const digit1 = this.creatDigit(partialCpf);
    const digit2 = this.creatDigit(partialCpf + digit1);

    const newCpf = partialCpf + digit1 + digit2;
    return newCpf === this.cleanCpf;

}

CreatCpf.prototype.creatDigit = function (partialCpf) {
    const cpfArray = Array.from(partialCpf);
    let regressive = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressive * Number(val));
        regressive--;
        return ac;
    }, 0);

    const digit = 11 - (total % 11);
    return digit > 9 ? '0' : String(digit);
}

CreatCpf.prototype.isSequence = function () {
    return this.cleanCpf[0].repeat(this.cleanCpf.length) === this.cleanCpf;
}

const cpf1 = new CreatCpf(cpf)
console.log(cpf1.cpfValid() === true ? 'CPF is valid' : 'CPF is not valid')
