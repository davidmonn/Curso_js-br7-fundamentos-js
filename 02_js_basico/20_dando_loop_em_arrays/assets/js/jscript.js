let cores = [
    'Preto',
    'Branco',
    'Azul',
    'Vermelho'
];

//Array ex 02
let cores2 = [
    {nome: 'preto', qt: 10},
    {nome: 'azul', qt: 5},
    {nome: 'vermelho', qt: 15}
];

cores.push('Verde')

//Usamos o .length para ele executar a quantidade certa de valores que nosso array possui
// for(let n = 0;n < cores.length; n++) {
//     console.log(cores[n]);
// }

//Forma mais facil de Loop em Array
// for(let i in cores) {
//     console.log(cores[i])
// }

//Forma mais facil de Loop em Array
// CONVERTENDO PARA UPPERCASE
for(let i in cores2) {
    cores2[i].nome = cores2[i].nome.toUpperCase();
}

console.log(cores2); // console.log foi deixado fora do loop para nao haver repeticao do proprio console.log



// Outra forma com mesmo resultado:
// for(let cor of cores) {
//     console.log(cor);
// }
/*
for(let cor2 of cores2) {
    // console.log(`Nome: ${cor2.nome} - Quantidade: ${cor2.qt}`);
    // Ou
    let maiusculo = cor2.nome.toUpperCase();
    console.log('Nome: ' + maiusculo+ ' ' + 'Quantidade: '+ cor2.qt);
}
*/