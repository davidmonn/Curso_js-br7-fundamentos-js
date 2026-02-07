// function clicTest() {
//     const clic = document.querySelector(".ex-manip");
//     const ul = clic.querySelector("ul");

//     const newButton = document.createElement("button");
//     newButton.innerHTML = "Clique aqui";

    
//     // Usado para poder adicionar conteudo apos o elemento selecionado
//     ul.after(newButton);
// }



// function clicTest() {
//     const clic = document.querySelector(".ex-manip");
//     const ul = clic.querySelector("ul");

//     // Usado para poder ser adicionado conteudo antes do elemento selecionado
//     ul.before("<button>Clique aqui para mais infos</button>");
// }

function clicTest() {
    const clic = document.querySelector(".ex-manip");
    const ul = clic.querySelector("ul");

    let newUl = document.createElement('ul');

    // Loop para criar 5 itens na lista (0 a 4)
    for(let i = 0; i < 5; i++) {
        // Cria o elemento <li>
        let newLi = document.createElement('li');
        // Adiciona conteúdo ao elemento <li>
        newLi.innerHTML = `Item add ${i}`;
        // Adiciona o <li> dentro da nova <ul>
        newUl.append(newLi)
    }
    
    // Usado para poder adicionar conteudo apos o elemento selecionado
    ul.after(newUl);
}

