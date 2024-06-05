let gasolina
let alcool
let opcao = prompt('o que voce deseja?'+
    '\n1- abastecer com gasolina; \n2- abastecer com alcool; \n 3- calibrar os pneus')

switch(opcao){
    case '1':
        let gasolina = parseInt(prompt('qual valor deseja colocar de gasolina?'))
        gasolina = gasolina / 5
        console.log('voce colocou '+ gasolina +' litros de gasolina')
        break;
    case '2':
        let alcool = parseInt(prompt('qual valor deseja colocar de alcool?'))
        alcool = alcool / 3
        console.log('voce colocou '+ alcool +' litros de alcool')
        break;
    case '3':
        console.log('pneus calibrados com sucesso')
        break;
    default:
        console.log('por favor digite alguma das 3 opções')
}