// function clickTest() {
//     const select = document.querySelector("#manip-elemen");
//     const ul = select.querySelector("ul");

//     // Adiciona conteúdo ao final do elemento, sem apagar o conteúdo existente.
//     ul.children[0].append("(Alterado)");
// }

// function clickTest() {
//     const select = document.querySelector("#manip-elemen");
//     const ul = select.querySelector("ul");

//     //Cria o elemento
//     let newLi = document.createElement("li");
//     //Adiciona conteudo ao elemento criado
//     newLi.innerText = "Item adicionado!";

//     //Aplica o conteudo dentro do elemento desejado
//     ul.appendChild(newLi);
// }

function clickTest() {
    const select = document.querySelector("#manip-elemen");
    const ul = select.querySelector("ul");

    //Cria o elemento
    let newLi = document.createElement("li");
    //Adiciona conteudo ao elemento criado
    newLi.innerText = "Item adicionado!";

    //Aplica o conteudo dentro do elemento desejado (No comeco)
    ul.prepend(newLi);
}