function selectClic() {
    const clicSelect = document.querySelector(".manipCss");
    clicSelect.addEventListener("click", btnSelect);
}

function btnSelect() {
    const clic = document.querySelector(".testeManip");
    clic.innerText = "Funcionando";

    console.log(clic);
}

selectClic();
