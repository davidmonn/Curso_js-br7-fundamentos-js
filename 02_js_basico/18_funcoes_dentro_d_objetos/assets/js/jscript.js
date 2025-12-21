let pessoa = {
    nome: "David",
    sobrenome: "Monteiro",
    idade: 28,
    nomeCompleto: function () {
        //return this.nome + ' ' + this.sobrenome; 
        //Ou
        return `${this.nome} ${this.sobrenome}`;
    }
};

console.log(pessoa.nomeCompleto());