/*
Exercicio:

Calcule a porcentagem entre 2 numeros.
Exemplo: 25% de 40 é 10.
Fórmula de porcentagem: (x/y) * 100
Uso da funcao:

let x = 40;
let y = 10;
let pct = calcPct(x, y);
console.log(`${pct}% de ${x} é ${y}`);
*/

function calcPct(n1,n2) {
    let pct = (n2 / n1) * 100;
    return pct;
    //ou
    // rerturn (n2 / n1) * 100
}

let x = 80;
let y = 10;
let pct = calcPct(x, y);
console.log(`${pct}% de ${x} é ${y}`);