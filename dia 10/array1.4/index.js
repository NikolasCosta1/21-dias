let numero = (parseInt(prompt('digite um numero')))
let array = []
array[0] = numero - 1
array[1] = numero

for(contador = 2; contador < 10; contador++){
    array[contador] = array[contador - 1] + array[contador - 2]
}
console.log('numeros de fibonacci: ', array)