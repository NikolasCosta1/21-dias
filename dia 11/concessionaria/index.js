let modelo = []
let valores = []
let anos = []
let continuar = true
let contador = 0

while(continuar){
    carro = prompt('digite o modelo do carro')
    valor = parseFloat(prompt('digite o valor do carro'))
    ano = parseInt(prompt('digite o ano de fabricação do carro'))
    modelo[contador] = carro
    valores[contador] = valor
    anos[contador] = ano
    let sair = prompt('deseja inserir mais um veiculo? (s/n)')
    if(sair == 'n'){
        continuar = false
    }
    console.log(modelo[contador]+', '+anos[contador]+' valor: '+valores[contador])
    contador++
}

for(let i = 0; i < valores.length - 1; i++){
    for(let j = 0; j < valores.length - i - 1; j++){
        if(valores[j] > valores[j + 1]){
            let modeloMaiorValor = modelo[j]
            modelo[j] = modelo[j + 1]
            modelo[j + 1] = modeloMaiorValor

            let anoMaiorValor = anos[j]
            anos[j] = anos[j + 1]
            anos[j + 1] = anoMaiorValor

            let maiorValor = valores[j]
            valores[j] = valores[j + 1]
            valores[j + 1] = maiorValor
        }
    }
}
console.log('modelos ordenados pelo preço: ')
for(i = 0; i < modelo.length; i++){
    console.log(modelo[i]+' - '+anos[i]+' - '+valores[i])
}