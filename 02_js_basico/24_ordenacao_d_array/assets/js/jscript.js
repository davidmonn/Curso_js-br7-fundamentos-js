// let fruits = ['Maca', 'Uva', 'Laranja', 'Banana'];

// //Sort do menor pro maior a-z
// fruits.sort();

// //reverse inverte porem se usada junto do sort, geramos uma lista de z-a
// fruits.reverse();

// console.log(fruits);

let cars = [
    {brand: 'Fiat', year: 2022},
    {brand: 'BMW', year: 2018},
    {brand: 'Ferrari', year: 2020}
];

// cars.sort((a, b) => {
//     if(a.year > b.year) {
//         return 1;
//     }  else if(a.year < b.year) {
//         return -1;
//     } else {
//         return 0;
//     }
// });

cars.sort((a, b) => {
    return b.year - a.year; 
});


console.log(cars);
