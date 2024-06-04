// declarando as variaveis
let nome = ''
let idade = 0
let altura = 0
let peso = 0    

//solicitando valores ao usuario e atribuindo para as variaveis 
nome = prompt('digite seu nome:')
idade = parseInt(prompt('digite sua idade:'))
altura = parseFloat(prompt('digite a sua altura:'))
peso = parseInt(prompt('digite o seu peso'))

// calculo data de nascimento e imc
let anoNascimento = 0
anoNascimento = 2024 - idade
let imc = 0
imc = peso / (altura * altura)

//exibindo as informações no console 
console.log('ola '+ nome + ', você tem '+ idade + ' anos, nasceu em '+ anoNascimento + 
            ', tem '+ altura + ' de altura, pesa '+ peso + ' kilos e seu IMC é de '+ imc + ' Kg/m2')