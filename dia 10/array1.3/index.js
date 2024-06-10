let array = []
let arrayInvertido = []

let quantidade = parseInt(prompt('quanto numeros voce deseja informar?'));

for(i = 0; i < quantidade; i++){
    let numero = parseInt(prompt('informe o '+(i + 1)+'º numero'));
    array[i] = numero
}

let contador = quantidade - 1
for(a = 0;a < quantidade; a++){
    arrayInvertido[a] = array[contador]
    contador--
}
console.log('array normal: ',array)
console.log('array invertido: ',arrayInvertido)