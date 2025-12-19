let user = {
    nome: "David",
    idade: 28,
    hobbies: ['Tocar Violao', 'Estudar Programacao', 'Jogar'],
    faculdade: 'Analise e Desenvolvimento de Sistemas'
};

console.log(user.nome, user.idade, user.hobbies);

//Alterando ou Acessando Objeto:
user.nome = 'Suzana';
user.idade = 25;
//Atribuicao direta
user.hobbies = ['Tocar Guitarra', 'Estudar Programacao', 'Jogar'];

//Adicionar:
user.hobbies.push('Assistir Series');

console.log(user.nome, user.idade, user.hobbies);

// Exemplo 02
let personagem = {
    nome: 'DaMon',
    idade: 28,
    consoles: [
        {console: 'PS5', modelo: 'Slim - Padrao'},
        {console: 'Nintendo Switch', modelo: 'Padrao'},
        {pc: 'Dell G15', modelo: 'Intel rtx3050'}
    ]
}

//Acessando Objeto com Array e Objeto:
console.log(personagem.consoles[0].console);