let continuar = 'nao'
let anoAtual = 2024
while(continuar != 'sim'){
    let nome = prompt('digite seu nome')
    let idade = prompt('digite sua idade')
    let = salario = parseFloat(prompt('digite seu salario atual'))
    console.log('nome: '+nome+', idade: '+idade+', salario: R$'+salario)
    continuar = prompt('as informações estao corretas?(sim/nao)')
}
let aumento = 0.015
console.log('sua previsao de aumento do salario para os proximos 10 anos')

for(let contagem = 1; contagem <= 10; contagem++){
    salario += salario * aumento
    aumento *= 2
    let salarioFormatado = Number(salario.toFixed(2));
    console.log((anoAtual + contagem)+' = R$'+salarioFormatado)
}