(function (){
    function pessoa (nome, sobrenome, peso, altura) {
        return {
            nome,
            sobrenome,
            // fala: function (assunto) {
            fala: function (assunto) {
                console.log(this.nome + ' ' + assunto);
                // console.log(nome + ' ' + assunto)        
            },
            get nomeCompleto () {
                return this.nome + ' ' + this.sobrenome;
            },
            set nomeCompleto (valor) {
                valor = valor.split(' ');
                this.nome = valor.shift();
                this.sobrenome = valor.join(' ');

            },
            peso,
            altura, 
            get imc() {
                const index = this.peso / (this.altura ** 2);
                return index.toFixed(2);
            }
        }
    } 
    const p1 = pessoa('Daniel', 'Amorim', 80, 1.8)
    p1.nomeCompleto = 'Karina prado';
    p1.fala(`seu imc é ${p1.imc}`)
    console.log(p1.nome, p1.sobrenome);
    console.log(p1.imc);
    
})()

