class ToDo{
    Texto
    Prioridade
    Feito = false

    constructor(texto, prioridade){
        this.Texto = texto
        this.Prioridade = prioridade
    }
}

function CriarToDo(texto, prioridade, array){
    let objetoTodo = new ToDo(texto, prioridade)
    if(!array.some(x => x.Texto == texto))
        array.push(objetoTodo)
    return objetoTodo
}

function AtualizarToDo(textoAntigo, textoNovo, array){
    let atualizado = false
    array.forEach(todo => {
        if(todo.Texto == textoAntigo){
            todo.Texto = textoNovo
            atualizado = true
        }
    });
    return atualizado
}

function ConcluirToDo(array, texto) {
    let concluido = false;
    array.forEach(todo => {
        if (todo.Texto === texto) {
            todo.Feito = !todo.Feito;
            concluido = true;
        }
    });
    return concluido;
}

function ExcluirToDo(array, texto){
    let indice
    let removido = false
    array.forEach(todo => {
        if(todo.Texto == texto){
            indice = array.indexOf(texto)
            removido = true
        }
    })
    array.splice(indice, 1)
    return removido
}

function PesquisarToDo(array, texto){
    return array.some(todo => todo.Texto.includes(texto))
}

function OrdenarCrescente(array){
    array.sort((a, b) => a.Prioridade - b.Prioridade)
    return array
}

function OrdenarDecrescente(array){
    array.sort((a, b) => b.Prioridade - a.Prioridade)
    return array
}

let listaDeTarefas = [];

let tarefa1 = CriarToDo('estudar JavaScript', 2, listaDeTarefas);
let tarefa2 = CriarToDo('comprar comida', 1, listaDeTarefas);
let tarefa3 = CriarToDo('trabalhar', 3, listaDeTarefas);

console.log('lista inicial de tarefas')
console.log(listaDeTarefas)

AtualizarToDo('comprar comida', 'ir ao mercado', listaDeTarefas);
console.log('lista atualizada')
console.log(listaDeTarefas)

ConcluirToDo(listaDeTarefas, 'estudar JavaScript');
console.log('tarefa concluida')
console.log(listaDeTarefas)

ExcluirToDo(listaDeTarefas, 'trabalhar');
console.log('tarefa excluida')
console.log(listaDeTarefas)

let palavraChave = 'estudar'
let encontrar = PesquisarToDo(listaDeTarefas, palavraChave)
console.log('voce encontrou a palavra '+palavraChave+' na tarefa: ',encontrar)