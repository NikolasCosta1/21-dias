class Carro{
    nomeEquipe
    potencia
    velocidadeMax
    aceleracao

    constructor(nomeEquipe, potencia, velocidadeMax, aceleracao){
        this.nomeEquipe = nomeEquipe
        this.potencia = potencia
        this.velocidadeMax = velocidadeMax
        this.aceleracao = aceleracao
    }

    CalcularTempo(distancia){
        let resultado = distancia / (this.velocidadeMax / this.aceleracao)
        return resultado
    }
}

class Corrida{
    local
    tipo
    distancia
    participantes
    vencedor
    constructor(local, tipo, distancia){
        this.local = local
        this.tipo = tipo
        this.distancia = distancia
        this.participantes = []
        this.vencedor = ''
    }

    menosTempo(){
        let menorTempo = this.participantes[0].CalcularTempo(this.distancia)
        let vencedor = this.participantes[0]
        for(let i = 1;i < this.participantes.length;i++){
            let tempo = this.participantes[i].CalcularTempo[this.distancia]
            if(tempo < menorTempo){
                menorTempo = tempo
                vencedor = this.participantes[i]
            }
        }
    return this.vencedor = vencedor
    }
    ganhador(){
        console.log('o ganhador é '+ this.vencedor.nomeEquipe)
    }
}

let corrida = new Corrida('monaco', 'formula 1', '100000')

corrida.participantes[0] = new Carro('ferrari', '350', '300', '4')
corrida.participantes[1] = new Carro('mercedes', '330', '320', '7')
corrida.participantes[2] = new Carro('lamborghini', '370', '300', '4')
corrida.participantes[3] = new Carro('nissan', '300', '330', '6')
corrida.menosTempo()
corrida.ganhador()