let nome 
let salario 
let aumento
let porcentagem
function perguntaNomeSalario(){
    nome = prompt('digite o nome do colaborador')
    salario = parseInt(prompt('informe o seu salário'))
    calculoAumento(salario, nome);
}

function calculoAumento(salario,nome){
    if(salario <= 1500){
        aumento = salario * 1.20
        porcentagem = '20%'
    }else if(salario > 1500 && salario <= 2000){
        aumento = salario * 1.15
        porcentagem = '15%'
    }else if(salario > 2000 && salario <= 3000){
        aumento = salario * 1.10
        porcentagem = '10%'
    }else{
        aumento = salario * 1.05
        porcentagem = '5%'
    }
    let aumentoFormatado = Number(aumento.toFixed(2));
    console.log('Seu nome é: '+nome+'\nSeu salario atual é: '+salario+'\nSeu salario aumento em: '
        +porcentagem+'\nSeu salario reajustado sera de: '+aumentoFormatado)
    novasInformacoes();
}

function novasInformacoes(){
    let opcao = prompt('digite 1 para inserir novas informações')
    
    if(opcao == '1'){
        perguntaNomeSalario()
    }else{
        continuar = false
        console.log('programa encerrado')
    }
    
}