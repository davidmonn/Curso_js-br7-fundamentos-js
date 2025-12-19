/* OBJETO MULTIPLO
let usuario = [
    {
        nome: 'David',
        idade: 28, 
        profissao: 'Auxiliar de Producao - Procurando oportunidades como dev',
        hobbies: 'Tocar violao, estudar programacao'
    },
    {
        nome: 'Suzana',
        idade: 25,
        prrofissao: 'Buscando oportunidade como dev',
        hobbies: 'Estudar programacao, tocar guitarra, jogar'
    }
];
*/

let user = {
    nome: 'David',
    idade: 28, 
    profissao: 'Auxiliar de Producao. Procurando oportunidades como dev',
    hobbies: 'Tocar violao, estudar programacao'
};

//  OBJETO DENTRO DE OBJETO:
let personagem = {
    nome: 'DMon',
    oficio: 'Guerreiro',
    olhos: ['castanho', 'preto'],
    atributos: {
        nivel: 20,
        forca: 35,
        stamina: 20,
        magia: 10
    }
}

//console.log(`O usuario ${user.nome} tem ${user.idade}, trabalha como ${user.profissao} e tem como hobbies ${user.hobbies}`);

console.log(personagem.atributos.nivel);
console.log(personagem.olhos[1]);