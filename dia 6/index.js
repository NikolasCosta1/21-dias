let numero = parseInt(prompt('digite um numero'))   

for(let contador = 0; contador <= numero; contador++){
    console.log(contador)
}

for(let contagem = 0; contagem <= 50; contagem += 5){
    console.log(contagem)
}

for(let inversa = 50; inversa >= 0; inversa -= 5){
    console.log(inversa)
}

let tabuada = parseInt(prompt('digite o numero que deseja ver a tabuada'))

for(let tab = tabuada; tab <= tabuada + 2; tab++){
    console.log('tabuada do numero: '+ tab)
    for(let i = 0; i <= 10; i++){
        console.log(tab + ' x '+ i + ' = '+ tab * i)
    }
}