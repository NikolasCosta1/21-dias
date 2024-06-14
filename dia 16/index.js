let continuar = true
let nomes = []
let senhas = []
function opcao(){
    let escolha = prompt('o que voce deseja fazer?\n1-cadastro\n2-login\n3-excluir\n4-encerrar programa')
    return escolha
}   

function cadastrar(){
    nomes.push(prompt('digite o nome de usuario'))
    senhas.push(prompt('digite a sua senha'))
}

function fazerLogin(nome, senha){
    let indice = nomes.indexOf(nome)
    if(indice !== -1 && senhas[indice] == senha){
        return true
    }else{
        return false
    }
}

function excluirUsuario(nome){
    let indice = nomes.indexOf(nome)
    if(indice !== -1){
        nomes.splice(indice,1)
        senhas.splice(indice,1)
        console.log('cadastro excluido com sucesso')
    }else{
        console.log('usuario nao encontrado')
    }
}

while(continuar){
    let escolha = opcao();

    switch(escolha){
        case '1':
            cadastrar();
            break;
        case '2':
            let nomeLogin = prompt('digite seu usuario')
            let senhaLogin = prompt('digite sua senha')
            let login = fazerLogin(nomeLogin, senhaLogin);
            if(login){
                console.log('login feito com sucesso!')
            }else{
                console.log('Nome ou senha incorretos!')
            }
            break;
        case '3':
            let nome = prompt('digite o nome que deseja excluir')
            excluirUsuario(nome);
            break;
        case '4':
            continuar = false
            break;
        default:
            console.log('Não existe essa opção')
    }
}