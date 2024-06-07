let qntHomens = 0
let qntMulheres = 0
let mediaGeral = 0
let maiorNotaHomem = 0
let contador = 1

while(contador <= 5){
    let nota = Number(prompt('digite a nota do '+ contador +'º aluno'))
    let sexo = prompt('digite seu sexo(m/f)')

    if (sexo == 'm'){
        if(nota > maiorNotaHomem){
            maiorNotaHomem = nota
        }
        qntHomens++
    }
    if(sexo == 'f' && nota >= 7){
        qntMulheres++
    }
    mediaGeral += nota
    contador++
}
mediaGeral = mediaGeral / 5

console.log('a media dos alunos foi de ',mediaGeral)
console.log('a quantidade de homens a enviar a nota foi de ',qntHomens)
console.log('a quantidade de mulheres a ficar acima de 7 foi de ',qntMulheres)
console.log('a maior nota entre os homens foi ',maiorNotaHomem)