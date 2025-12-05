// EXERCICIOS

/*
1)Substitua o @ pela condicional correta para que o resultado seja true.
let x = 10;
let y= 5;
console.log(x @ y);

2)Substitua o @ pela condicional correta para que  o resultado seja false.
let w = "10";
let z= 10;
console.log(w @ z);

3) Substitua o @ pela condicional correta para que  o resultado seja true.
let a = 10;
let b= 5;
console.log(a @ b);

4) Crie uma condicional para verificar o preco da carne, esta barato ou caro. PS: Ate 45 esta barato
let preco = 45.3;
*/

// Exercicio 01
let x = 10;
let y= 5;
console.log(x !== y)

// Exercicio 02
let w = "10";
let z= 10;
console.log(w === z);

// Exercicio 03
let a = 10;
let b= 5;
console.log(a > b);

// Exercicio 04
let preco = 45.3;
let carne = 47;

if(preco > carne) {
    console.log(`Carne esta dentro do orsamento desejado. Valor desejado abaixo de: R$:${preco}`);
} else {
    console.log(`Esta acima do valor desejado. Escolha algo abaixo de ${preco}`);
}
