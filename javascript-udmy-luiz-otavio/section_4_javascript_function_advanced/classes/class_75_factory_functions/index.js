(function (){
    function pessoa (nome, sobrenome) {
        return {
            nome,
            sobrenome,
            fala: function (assunto) {
                console.log(this.nome + ' ' + assunto)
                // console.log(nome + ' ' + assunto)
            }
        }
    } 
    const p1 = pessoa('Daniel', 'Amorim')
    p1.fala('fala bem!')
})()

// This command is used refer all object.