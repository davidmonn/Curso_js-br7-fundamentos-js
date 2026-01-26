let fruits = ['Maca', 'Pera', 'Laranja', 'Kiwi', 'Morango', 'Banana', 'Manga', 'Uva'];

// let fruitSelect = fruits.filter((item) => {
//     if(item.length > 4) {
//         return true;
//     } else {
//         false
//     }
// })

// OU

//Metodo de melhor entendimento
// let frutas = fruits.every((frutas) => {
//     if(frutas.length > 3) {
//         return true;
//     } else {
//         return false;
//     }
// });

// if(frutas) {
//     console.log(`Todas frutas tem mais que 3 letras.`)
// } else {
//     console.log(`Ha frutas com menos que 3 letras`)
// }

// //Resumido
// let fruitSelect = fruits.filter((more) => more.length > 4);

// console.log(`Todas True: ${fruits}`)
// console.log(`Uma False: ${fruitSelect}`);





let ok = fruits.some((algum) => algum.length > 3);

if (ok) {
    console.log(`Alguma(s) fruta(s) da nossa lista possui mais que 3 letra(s)`);
} else {
    console.log(`Nenhuma fruta da nossa lista possui mais que 3 letras`);
}

let buscar = fruits.includes('Maca');
console.log(buscar);

// Ou

if(fruits.includes('Maca')) {
    console.log(`Fruta selecionada foi encontrada.`);
} else {
    console.log(`Nao encontrado`);
}