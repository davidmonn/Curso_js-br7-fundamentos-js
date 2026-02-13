//Versao 01

// function selectD() {
//     let selectDom = document.querySelector(".exercicio");
//     selectDom.addEventListener("click",selectP);
// }

// function selectP() {
//     let alterP = document.querySelector(".exercicio p");
//     alterP.innerHTML = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta ex laborum eveniet aliquam placeat sequi, laboriosam facilis similique, saepe eligendi hic laudantium unde nam ab iusto veritatis nostrum, assumenda facere!, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta ex laborum eveniet aliquam placeat sequi, laboriosam facilis similique, saepe eligendi hic laudantium unde nam ab iusto veritatis nostrum, assumenda facere!"
// }

// selectD();


//Versao 02
function selectBtn() {
    const btnSelect = document.querySelector('#exBtn');
    btnSelect.addEventListener('click',clic);
}

function clic() {
    const alterP = document.querySelector('.exercicio p');
    alterP.innerText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta ex laborum eveniet aliquam placeat sequi, laboriosam facilis similique, saepe eligendi hic laudantium unde nam ab iusto veritatis nostrum, assumenda facere!, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta ex laborum eveniet aliquam placeat sequi, laboriosam facilis similique, saepe eligendi hic laudantium unde nam ab iusto veritatis nostrum, assumenda facere!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta ex laborum eveniet aliquam placeat sequi, laboriosam facilis similique, saepe eligendi hic laudantium unde nam ab iusto veritatis nostrum, assumenda facere!, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta ex laborum eveniet aliquam placeat sequi, laboriosam facilis similique, saepe eligendi hic laudantium unde nam ab iusto veritatis nostrum, assumenda facere!";
}

selectBtn();