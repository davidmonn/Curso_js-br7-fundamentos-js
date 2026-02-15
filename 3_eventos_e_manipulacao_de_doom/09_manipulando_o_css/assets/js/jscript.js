function selectClic() {
    const clicSelect = document.querySelector(".manipCss");
    clicSelect.addEventListener("click", clicou);
}

// function action() {
//     const clic = document.querySelector('#prim');
//     const clicou = clic.innerHTML;

//     console.log(clicou);
// 

let clicColor = false;

function clicou() {
    //Com isso ja ira selecionar nossa primera tag <li>
    const li = document.querySelector('li');

    li.style.fontSize = '20px';
    li.style.transition = '0.5s';

    if(clicColor == false) {
        li.style.backgroundColor = '#00F'
        clicColor = true;
    } else {
        li.style.backgroundColor = '#F00';
        clicColor = false;
    }

}

selectClic();