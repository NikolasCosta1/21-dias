let numUm = Number(prompt('digite um numero'))
let numDois = Number(prompt('digite outro numero numero'))

let operacao = prompt('informe qual operacao voce quer fazer(+, -, *, /)')

switch (operacao){
    case '+':
        operacao = numUm + numDois
        console.log(numUm +' + ' + numDois + ' é igual a ' + operacao)
        break;
    case '-':
        operacao = numUm - numDois
        console.log(numUm +' - ' + numDois + ' é igual a ' + operacao)
        break;
    case '*':
        operacao = numUm * numDois
        console.log(numUm +' multiplicado por ' + numDois + ' é igual a ' + operacao)
        break;
    case '/':
        operacao = numUm / numDois
        console.log(numUm +' dividido por ' + numDois + ' é igual a ' + operacao)
        break;
    default:
        console.log('nao tem essa operação')
}