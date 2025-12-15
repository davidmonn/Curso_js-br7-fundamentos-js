let colors = ['Azul', 'Vermelho', 'Branco', 'Preto', 'Cinza', 'Green']
let idades = [28, 25, 44, 69, 13];
let pessoa = { //Nesse caso object unico
    nome: 'David',
    idade: 28,
    profissao: 'Auxiliar de Producao',
};

//Multiplos objects:
let pessoas = [
    {
        nome: 'David',
        profissao: 'Aux Producao, estudando programacao',
        idade: 28 + ' Anos',
    },
    {
        nome: 'Suzana',
        profissao: 'Procurando como programadora',
        idade: 25 + ' anos'
    }
];


console.log(colors[1]);
console.log(idades[0]);

//console.log(pessoa);
console.log(pessoas[0].nome); // Para selecionar um [0] seleciona primeira lista e .nome o valor que esta no nome


let nomes = ['David', 'Suzana', 'Toninha'];
let sobNomes = ['Monteiro', 'Santos', 'Monteiro', nomes];

let comidas = ['Frutas', ['banana', 'maracuja', 'maça', 'Manga'], 'Salgados', ['Pizza', 'Fogazza','Hamburguer','Esfiha']];

console.log(comidas[1][2]); //comidas[1] → seleciona o array de frutas - [2] → seleciona "maça" dentro desse array
// Resumindo:  O índice 1 acessa o array interno das frutas, e o índice 2 acessa o valor "maça" dentro desse array.