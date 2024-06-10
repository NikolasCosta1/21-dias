let nomes = []
let notas = []
let somaNotas = 0
let media = 0
let continuar = false
let totalAlunos = 0
do{
    nomes[totalAlunos] = prompt('digite o '+(totalAlunos + 1)+'º nome')
    notas[totalAlunos] = parseInt(prompt('digite a '+(totalAlunos + 1)+'º nota'))
    let sair = prompt('1- para sair \n2- para continuar')
    if(sair === '1'){
        continuar = false
    }else if(sair === '2'){
        continuar = true
    }else{
        console.log('nao existe essa opcao')
    }
    console.log('a nota do aluno '+nomes[totalAlunos]+' foi: '+notas[totalAlunos])
    somaNotas += notas[totalAlunos]
    totalAlunos++
}while(continuar)

media = somaNotas / totalAlunos 
let mediaFormatada = Number(media.toFixed(2));
console.log('a soma das notas foi: ', somaNotas)
console.log('a media dos alunos foi de: ', mediaFormatada)
