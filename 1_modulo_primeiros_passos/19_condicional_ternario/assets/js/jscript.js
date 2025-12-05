let isMember = true;

// Condicional Ternaria
let shipping = isMember ? 2 : 10; // Resumindo se for membro e der certo caindo no true, o reltado e 2 se der nao 10


// Outro exemplo de condicional Ternaria para vermos se somos membros:
console.log(`${isMember ? "Você é um membro." : "Você NÃO é um membro."}`);

console.log(`Frete: ${shipping}`);

// Outro exemplo

let age = 28;

let isAdult = (age >= 18 ? 'Adulto' : 'Nao e adulto');
console.log(isAdult);