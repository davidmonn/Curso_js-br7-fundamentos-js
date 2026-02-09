// function event() {
//     let clic = document.querySelector('#testPut');
//     clic.addEventListener('click', btn);
// }

// function btn() {
//     const select = document.querySelector('#testPut');
//     const button = document.createElement('button');
//     button.innerHTML = 'Clique Aqui';

//     select.after(button);
// }

// event();

function clic() {
    let clic = document.querySelector('#testBt');
    clic.addEventListener('click', clicou);
}

// function clicou() {
//     let input = document.querySelector('#testPut');
    
//     console.log(input.getAttribute('placeholder'));
// }

// function clicou() {
//     let input = document.querySelector('#testPut');
    
//     if(input.hasAttribute('placeholder')) {
//         console.log(`Atributo encontrado`);
//     } else {
//         console.log(`Não localizado.`)
//     }
// }

// function clicou() {
//     const input = document.querySelector('#testPut');

//     // setAttribute recebe 2 parâmetros:
//     // 1º nome do atributo, 2º valor do atributo
//     input.setAttribute('type', 'text');
// }

function clicou() {
    const input = document.querySelector('#testPut');

    const botao = document.querySelector('#testBt');

    if(input.getAttribute('type') === 'text') {
        input.setAttribute('type', 'password');
        //Altera texto do botao
        botao.innerText = "Mostrar Senha"
    } else {
        input.setAttribute(('type'), 'text');
        //Altera texto do botao
        botao.innerText = "Ocultar senha"
    }
}


clic();