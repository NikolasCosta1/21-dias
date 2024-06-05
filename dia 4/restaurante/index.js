let fome = prompt('voce esta com fome?(sim ou nao)')
let temDinheiro = prompt('voce tem dinheiro?(sim ou nao)')
let restauranteAberto = prompt('o restaurante está aberto?(sim ou nao)')

if (fome === 'nao' || temDinheiro === 'nao'){
    console.log('hoje a janta será em casa')
}else if(temDinheiro === 'sim' && restauranteAberto === 'nao'){
    console.log('peça um delivery')
}else{
    console.log('hoje a janta sera no seu restaurante favorito')
}


