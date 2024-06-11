let nomes = []
let senhas = []
let continuar = true
let contador = 0
while(continuar){
    let opcao = prompt('o que voce deseja fazer?\n1- cadastrar\n2- login\n3- excluir\n4- encerrar programa')
    switch(opcao){
        case '1':
            let nomeCadastro = prompt('digite seu nome')
            let senhaCadastro = prompt('digite sua senha')
            nomes[contador] = nomeCadastro
            senhas[contador] = senhaCadastro
            contador++
            break;
        case '2': 
            let nomeLogin = prompt('digite seu nome de login')
            let senhaLogin = prompt('digite sua senha')
            let usuarioValido = false
            for(let i = 0; i < nomes.length; i++){
                if(nomeLogin == nomes[i] && senhaLogin == senhas[i])
                    usuarioValido = true
            }
            if(usuarioValido){
                alert('login realizado com sucesso')
            }else{
                alert('login invalido')
            }
            break;
        case '3':
            let nomeExcluir = prompt('digite o usuario que deseja excluir')
            let nomeEx = []
            let senhaEx = []
            let contadorEx = 0

            for(let i = 0;i < contador;i++){
                if(nomeExcluir == nomes[i]){
                    console.log('usuario excluido com sucesso')
                }else{
                    nomeEx[contadorEx] = nomes[i]
                    senhaEx[contadorEx] = senhas[i]
                    contadorEx++
                }
            }
            nomes = nomeEx
            senhas = senhaEx
            contador--
            break;
        case '4':
            continuar = false
            break;
        default:
            console.log('opção nao existe, tente outra')
            break;
    }       
}
