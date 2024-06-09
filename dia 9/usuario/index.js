let continuar = false
do{
    let nome = prompt('digite seu nome')
    let idade = parseInt(prompt('digite sua idade'))
    let peso = Number(prompt('digite seu peso'))
    let altura = Number(prompt('digite sua altura'))
    let profissao = prompt('qual é a sua profissao?')

    console.log('Ola '+nome+', voce tem '+idade+' anos, é '+profissao+', tem '+altura+'M de altura e pesa '+peso+'KG')

    if(idade < 18){
        console.log('sem gelada para voce')
    }else{
        console.log('esta liberado para tomar umas geladas')
    }

    let meses = idade * 12
    let semanas = idade * 52
    let dias = idade * 365
    console.log('voce tem '+meses+' meses')
    console.log('voce tem '+semanas+' semanas')
    console.log('voce tem '+dias+' dias')

    let imc = 0
    imc = peso / (altura * altura)
    if(imc <= 18.5){
        console.log('magreza')
    }else if(imc > 18.5 && imc <= 24.9){
        console.log('normal')
    }else if(imc > 24.9 && imc <= 30){
        console.log('sobrepeso')
    }else{
        console.log('obesidade')
    }

    let anoAtual = 2024
    let anoNasc = anoAtual - idade
    console.log(nome+' voce nasceu em ', anoNasc)

    idadeAtual = 0
    for(let anoVivido = anoNasc;anoVivido <= anoAtual;anoVivido++){
        console.log(anoVivido+' - '+idadeAtual+' anos de idade')
        idadeAtual++
    }
    let opcao = prompt('digite 1 para continuar ou 2 para sair')
    if(opcao === '1'){
        continuar = true
    }else if(opcao === '2'){
        console.log('voce saiu')
        continuar = false
    }else{
        console.log('nao tem essa opcao, voce saiu')
        continuar = false
    }
}while(continuar)