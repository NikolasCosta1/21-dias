let continuar = true;
numeros = [];
posicaoArray = 0;

while(continuar){
    let numeroInserido = parseInt(prompt('digite um numero ou (1) para sair'));
    numeros[posicaoArray] = numeroInserido;
    if(numeroInserido == '1'){
        continuar = false;
        console.log('voce saiu');
        continue;
    }
    posicaoArray++
}
console.log(numeros)