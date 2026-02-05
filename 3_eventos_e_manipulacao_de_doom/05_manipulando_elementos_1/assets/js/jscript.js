// function testando() {
//     const teste = document.querySelector('#manipulando-elem');
//     console.log(teste.children[0].children);
// }


function testando() {
    const teste = document.querySelector('#manipulando-elem');
    const ul = teste.querySelector("ul");

    ul.children[0].innerHTML = "<strong>Modificado com innerHTML = ul.children[0].innerHTML</strong>"
}