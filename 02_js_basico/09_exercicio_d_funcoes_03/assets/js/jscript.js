/*
Crie uma funcao que valide usuario e senha.
Usuario correto: Pedro.
Senha correta: 123
*/

function validar(usuario, senha) {
    if(usuario === 'David' && senha === '123') {
        return true;
    } else {
        return false;
    }
}

let usuario = "David";
let senha = "123";
let validacao = validar(usuario,senha);

if(validacao) {
    console.log(`Acesso concedido`);
} else {
    console.log(`Acesso Negado`);
}