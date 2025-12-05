let idade = 17;


// EXEMPLO DE CONDICIONAL DEPENDENTE
/*
if(idade < 18) {
    console.log("Voce e uma crianca, idade informada:" . idade);
}

if(idade >= 18 && idade < 60) {
    console.log(`Voce e um adulto, idade informada: ${idade}`);
}

if(idade > 60) {
    console.log(`Voce e um idoso, idade informada: ${idade}`);
}
*/

// EXEMPLO DE CONDICIONAL DEPENDENTE
if(idade < 18) {
    console.log("Você é uma criança. Idade informada: " + idade);
} else if(idade >= 18 && idade < 60) {
    console.log(`Você é um adulto. Idade informada: ${idade}`);
} else if(idade >= 60) {
    console.log(`Você é um idoso. Idade informada: ${idade}`)
}

