class Computador{
    tipo
    processador
    video
    armazenamento
    memoriaRam
    ssd
    constructor(tipo, processador, video, armazenamento, memoriaRam, ssd){
        this.tipo = tipo
        this.processador = processador
        this.video = video
        this.armazenamento = armazenamento
        this.memoriaRam = memoriaRam
        this.ssd = ssd
    }
    informacoes(){
        console.log('voce possui um computador do tipo: '+this.tipo+' com o processador: '+this.processador+
            ', tipo de video: '+this.video+', '+this.armazenamento+' GB de armazenamento, '+this.memoriaRam+
            ' GB de ram e sdd: '+this.ssd)
    }
}
let computadores = []
let continuar = true
let contador = 0

while(continuar){
    let tipo = prompt('qual é o tipo do seu computador?(desktop/notebook)')
    let processador = prompt('qual é o seu processador?')
    let video = prompt('qual é o tipo de video?')
    let armazenamento = prompt('quanto gb tem de armazenamento?')
    let memoriaRam = prompt('quantos gb tem de memoriaRam?')
    let ssd = prompt('seu computador possui sdd?')
    let computador = new Computador(tipo, processador, video, armazenamento, memoriaRam, ssd)
    computador.informacoes();
    computadores[contador] = computador

    let opcao = prompt('digite 1 para continuar')
    if(opcao != '1'){
        continuar = false
    }else{
        contador++
    }
}
