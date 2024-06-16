class Hotel{
    Id
    Nome 
    Categoria
    Endereco
    Telefone

    constructor(id, nome, categoria, endereco, telefone){
        this.Id = id
        this.Nome = nome
        this.Categoria = categoria
        this.Endereco = endereco
        this.Telefone = telefone
    }
}

class Reserva{
    Id
    IdHotel
    NomeResponsavel
    DiaEntrada
    DiaSaida
    constructor(id, idHotel,nomeResponsavel, diaEntrada, diaSaida){
        this.Id = id
        this.IdHotel = idHotel
        this.NomeResponsavel = nomeResponsavel
        this.DiaEntrada = diaEntrada
        this.DiaSaida = diaSaida
    }
}

let hoteis = []
let reservas = []
let idHotel = 1
let idReserva = 1

function cadastrarHotel(){
    let nome = prompt('digite o nome do hotel')
    let categoria = prompt('digite a categoria do hotel')
    let endereco = prompt('digite o endereço do hotel')
    let telefone = prompt('digite o telefone do hotel')
    let hotel = new Hotel(idHotel, nome, categoria, endereco, telefone)
    idHotel++
    hoteis.push(hotel)
}

function cadastrarReserva(){
    let idHotel
    let verificacao = false
    do{
        idHotel = parseInt(prompt('digite o id do hotel que deseja fazer a reserva'))
        for(i = 0;i < hoteis.length; i++){
            if(idHotel == hoteis[i].Id){
                i = hoteis.length
                verificacao = true
            }
        }
    }while(!verificacao)

    let nomeResponsavel = prompt('digite o nome do responsavel da reserva')
    let diaEntrada = parseInt(prompt('digite o dia de inicio da hospedagem'))
    let diaSaida
    do{
        diaSaida = parseInt(prompt('digite o dia de saida'))
        if(diaSaida < diaEntrada){
            console.log('o dia de entrada nao pode ser maior que o de saida')
        }
    }while(diaSaida > diaEntrada)
    let reserva = new Reserva(idReserva, idHotel, nomeResponsavel, diaEntrada, diaSaida)
    idReserva++
    reservas.push(reserva)
}

function procurarReservaPeloHotel(idHotel){
    reservas.forEach(reserva => {
        if(idHotel == reserva.IdHotel){
            let i = idHotel - 1
            console.log('nome do hotel: ', hoteis[i].Nome)
            console.log('nome responsavel: ', reserva.NomeResponsavel)
            console.log('dia entrada: ', reserva.DiaEntrada)
            console.log('dia saida: ', reserva.DiaSaida)
        }
    })
}

function procurarHotelPelaReserva(idReserva){
    let idHotel = reservas[idReserva - 1].IdHotel
    console.log('hotel: ', hoteis[idHotel - 1].Nome) 
    console.log('endereço: ', hoteis[idHotel - 1].Endereco)
    console.log('hotel: ', reservas[idHotel - 1].DiaEntrada)
    console.log('hotel: ', reservas[idHotel - 1].DiaSaida)
}

function procuraReservaPeloNome(nomeResponsavel){
    for(i = 0; i < reservas.length; i++){
        if(nomeResponsavel == reservas[i].NomeResponsavel){
            console.log('id reserva: ', reservas[i].Id)
            console.log('hotel: ',hoteis[(reservas[i].IdHotel) - 1].Nome)
        }
    }
}       

function procuraHotelPelaCategoria(categoria){
    let hoteisProcurados = []
    for(i = 0; i < hoteis.length; i++){
        if(categoria == hoteis[i].Categoria){
            hoteisProcurados.push(hoteis[i].Nome)
        }
    }
    return hoteisProcurados
}

function atualizarTelefone(idHotel, telefone){
    hoteis[idHotel - 1].Telefone = telefone
    console.log('telefone atualizado com sucesso')
}

let continuar = true

do{
    let escolha = prompt('escolha:\n1- cadastrar um hotel\n2- cadastrar uma reserva'+
        '\n3- procurar reserva pelo hotel\n4- procurar hotel pela reserva\n5- procurar reserva pelo nome'+
        '\n6- procurar hotel pela categoria\n7- atualizar o telefone\n8- sair')

    switch(escolha){
        case '1':
            cadastrarHotel()
            break;
        case '2':
            cadastrarReserva()
            break;
        case '3':
            procuraReservaPeloNome(parseInt(prompt('digite o id do hotel')))
            break;
        case '4':
            procurarHotelPelaReserva(parseInt(prompt('digite o id da reserva')))
            break;
        case '5':
            procuraReservaPeloNome(prompt('digite o nome do responsavel'))
            break;
        case '6':
            let hoteisProcurados = procuraHotelPelaCategoria(prompt('digite a categoria do hotel'))
            console.log(hoteisProcurados)
            break;
        case '7':
            let idHotel = parseInt(prompt('digite o id do hotel'))
            let telefone = prompt('digite o telefone novo')
            atualizarTelefone(idHotel, telefone)
            break;
        case '8':
            console.log('programa encerrado!')
            continuar = false
            break;
        default:
            console.log('nao existe essa opção, por favor digite umas das opções')
    }
}while(continuar)