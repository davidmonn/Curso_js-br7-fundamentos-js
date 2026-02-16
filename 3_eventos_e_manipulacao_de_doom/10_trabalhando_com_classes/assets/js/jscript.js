function eventClic() {
    const addClic = document.querySelector('.manClas');
    addClic.addEventListener('click',clicou);
}


//Verificando button
function clicou() {
    const selectBtn = document.querySelector('.manClas');
    
    //Se houveer a class selecionada, sera removida e adicionada e outra
    //Se clicar novamente, o mesmo acontece
    // if(selectBtn.classList.contains('testeButton')) {
    //     selectBtn.classList.remove('testeButton');
    //     selectBtn.classList.add('verde');
    // } else {
    //     selectBtn.classList.remove('verde');
    //     selectBtn.classList.add('testeButton');
    // }

    //Ou simplificando esse codigo:
    
    if(selectBtn.classList.contains('testeButton')){
        selectBtn.classList.replace('testeButton', 'newButton');
    } else {
        selectBtn.classList.replace('newButton', 'testeButton');
    }

    console.log(selectBtn.classList);
    
}

eventClic();