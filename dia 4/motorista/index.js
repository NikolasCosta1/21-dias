let nome = prompt('escreva seu nome')
let idade = Number(prompt('escreva sua idade'))
let carteiraMotorista = prompt('voce tem carteira de motorista(sim/nao)')
let carro = prompt('voce tem carro(sim/nao)')

if (idade < 18 || carteiraMotorista == 'nao'){
    console.log(nome +', voce nao pode dirigir')
}else if(carteiraMotorista == 'sim' && carro == 'nao'){
    console.log(nome+', voce pode dirigir mas nao tem carro')
}else{
    console.log(nome+ ', voce sera o motorista')
}