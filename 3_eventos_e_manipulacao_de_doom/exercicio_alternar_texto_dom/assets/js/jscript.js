// let alter = false;

// function selectD() {
//     let selectText = document.querySelector('#more');
//     selectText.addEventListener('click',alterText);
// }

// function alterText() {
//     let text = document.querySelector('.p-more');
   
//     if(!alter) {
//         text.innerText = 'Texto alterado com sucesso.';
//         alter = true;
//     } else {
//         text.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus tempora quod, aliquam totam rerum labore. Maiores blanditiis libero consequuntur, similique nisi doloremque nam quasi tenetur. Placeat eius quibusdam provident sequi.';
//         alter = false;
//     }
    
    
// }

// selectD();

let textOrigin;
let alter = false;

function selectEvent() {
    const selectD = document.querySelector('#more');
    selectText = document.querySelector('.p-more');

    textOrigin = selectText.innerText;
    selectD.addEventListener('click', altText);

}

function altText() {
    let selectText = document.querySelector('.p-more');

    if(!alter) {
        selectText.innerText = 'Texto alterado com sucesso.';
        alter = true;
    } else {
        if(alter == true) {
            selectText.innerText = textOrigin;
            alter = false;
        }
    }
    
}

selectEvent();