//Elementos
const input = document.querySelector('input');
const list = document.querySelector('ul');

//Adicao de evento
input.addEventListener('keyup', handleKeyUp);

//Funcao
function handleKeyUp(e) {
    if(e.key === 'Enter') {
        //ADICIONANDO ELEMENTO E VALOR
        //Menos eficaz quando lista fica grande
        // list.innerHTML += `<li> ${input.value } </li>`;
        const newLi = document.createElement('li');
        newLi.innerText = input.value
        list.appendChild(newLi);

        //ZERAR CAMPO INPUT
        input.value = '';
    }
}

