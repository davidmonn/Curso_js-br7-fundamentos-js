// const pressK = document.addEventListener('keyup', kUp);

// function kUp(press) {
//     console.log(press.key);
// }

// Tenho que pegar o valor > adicionar elemento li > adicionar o valor ao elemento li > criar logica enter

let saveKey = [''];

function kPress() {
    const kUp = document.querySelector('.inputEx');
    kUp.addEventListener('keyup', sKey);

    saveKey = kUp.value;
}

// function addLi() {
//     const ul = document.querySelector('#exercicio');
//     const li = ul.querySelector('ul');
//     li.append('li');
// }

function sKey(inf) {
    const ul = document.querySelector('#exercicio ul');
    const li = ul.createElement('li');

    // li.append('Add')

    // console.log(inf.key);
}

kPress();