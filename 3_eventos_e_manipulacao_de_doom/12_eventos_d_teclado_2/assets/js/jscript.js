const input = document.querySelector('input');
input.addEventListener('keyup', soltou);

function soltou(e) {
    console.log(`Tecla apertada: ${e.code}`);
    console.log(`SHIFT ? ${e.shiftKey}`);
    console.log(`CTRL ? ${e.ctrlKey}`);
    console.log(`ALT ? ${e.altKey}`);
    console.log(`--`);
}