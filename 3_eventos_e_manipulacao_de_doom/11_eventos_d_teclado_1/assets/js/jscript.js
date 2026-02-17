// Evento de teclado por HTML
function apertou() {
    console.log(`Apertou`);
}

function segurou() {
    console.log(`Segurou`);
}

function soltou() {
    console.log(`Soltou`);
}

//Evento de teclado por JS
// //Se quisermos colocar em um especifico
// const keyJS = document.querySelector('.keyJS');
// keyJS.addEventListener('ky')

//Usando tela inteira
document.addEventListener('keyup', soltou);

function soltou() {
    console.log(`Soltou`)
}