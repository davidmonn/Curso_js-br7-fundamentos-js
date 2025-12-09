function maiorDeIdade(idade) {
    if(idade >= 18) {
        return true;
    } else {
        return false;
    }
}

let idade = 10;
let verificacao = maiorDeIdade(idade);

if(verificacao) {
    console.log(`Maior de idade. Idade informada: ${idade}`);
} else {
    console.log(`Menor de idade. Idade informada: ${idade}`);
}