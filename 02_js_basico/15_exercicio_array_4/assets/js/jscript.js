/*
01. No array abaixo, qual o númeroque pega a ferrari
let carros = ['BMW', 'Ferrari', 'Mercedes'];
let x = 
console.log('1 ' + carros[x]);

02. Troque a Ferrari por Audi
console.log('2. Lista com Audi:');
console.log(carros);

03. Adicione Volvo a lista:
console.log('3, Lista com Volvo');

4. Exiba quantos itens tem no array
console.log(4. Itens no array: );
    
*/

// Ex 01
let carros = ['BMW', 'Ferrari', 'Mercedes'];
let x = 1;

console.log('1 ' + carros[x]);

// Ex 02
carros[1] = 'Audi';
console.log('2. Lista com Audi: ' + carros);

//Ex 03
carros.push('Volvo');

//Ex 04
console.log(carros.length)


//Quantidade de itens:
// console.log(carros.length);

//Mostrar itens da lista
// console.log(carros);