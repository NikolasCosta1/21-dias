let saldo = 1000
let maiorValor = 0
let somaValores = 0
let totalTransacoes = 0
let continuar = false
let media = 0

do{
    let nome = prompt('digite seu nome')
    let cpf = Number(prompt('digite seu cpf'))
    let valor = Number(prompt('digite o valor da transação que deseja efetuar'))
    let saqueDeposito = prompt('digite se deseja sacar(S) ou depositar(D)')
    if(valor < 0){
       console.log('valor invalido')
    }else if(saqueDeposito = 'S' && valor > saldo){
        console.log('saldo indisponivel')
    }else if(saqueDeposito == 'S'){
        console.log('ola, '+nome+' ' +cpf+' seu saldo é de R$',saldo)
        saldo -= valor;
        totalTransacoes++;
        somaValores += valor;
        if(valor > maiorValor){
            maiorValor = valor;
        }
        console.log('transação realizada com sucesso seu saldo agora é de R$',saldo)
    }else if (saqueDeposito == 'D'){
        console.log('ola, '+nome+' ' +cpf+' seu saldo é de R$',saldo)
        saldo += valor;
        totalTransacoes++;
        somaValores += valor;
        if(valor > maiorValor){
            maiorValor = valor;
        }
        console.log('transação realizada com sucesso seu saldo agora é de R$',saldo)
    }else{
        console.log('opcao invalida')
    }
    let opcao = prompt('voce deseja 1- para continuar ou 2- para parar')
    if(opcao === '1'){
        continuar = true
    }else if(opcao === '2'){
        continuar =    false
    }else{
        console.log('opção invalida sessao encerrada')
        continuar = false
    }

}while(continuar)

media = somaValores / totalTransacoes

console.log('seu saldo é de R$', saldo)
console.log('o maior valor inserido foi de R$',maiorValor)
console.log('a media das transaçoes foi de R$', media)
