let array = []
let arrayInvertido = []
let numeros = 0

for(let contador = 0; contador < 5; contador++){
   numeros = parseInt(prompt('digite o '+(contador+1)+'º numero'))
   array[contador] = numeros
}
console.log('array correto: ', array)

let i = 4
for(let a = 0; a < 5; a++){
    arrayInvertido[a] = array[i]
    i--
}
console.log('array invertido ', arrayInvertido)