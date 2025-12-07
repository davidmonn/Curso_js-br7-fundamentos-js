let profession = "vendedor";

switch(profession) {
    case 'fiscal' : 
        console.log(`Sua camisa sera verde. Profissao Escolhida: ${profession}`)
    break;
    case 'bombeiro' :
        console.log(`Sua camisa sera vermelha. Profissao Escolhida: ${profession}`)
    break;

    case 'policial' :
        console.log(`Sua camisa sera azul. Profissao Escolhida: ${profession}`)
    break;
    default:
        console.log(`Sua camisa sera preta. Profissao Escolhida ${profession}`)
}