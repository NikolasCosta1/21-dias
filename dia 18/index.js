class Livro{
    Titulo
    Autor
    Editora
    AnoPublicacao
    Disponibilidade = true

    constructor(titulo, autor, editora, anoPublicacao){
        this.Titulo = titulo
        this.Autor = autor
        this.Editora = editora
        this.AnoPublicacao = anoPublicacao
    }
}
let livros = []
livros.push(new Livro('1984', 'George Orwell', 'Companhia das Letras', 1949))
livros.push(new Livro('Cem Anos de Solidão', 'Gabriel García Márquez', 'Record', 1967))
livros.push(new Livro('O Senhor dos Anéis', 'J.R.R. Tolkien', 'Martins Fontes', 1954))
livros.push(new Livro('Harry Potter e a Pedra Filosofal', 'J.K. Rowling', 'Rocco', 1997))
livros.push(new Livro('Dom Quixote de la Mancha', 'Miguel de Cervantes', 'Penguin Classics', 1605))

class Biblioteca{
    Nome 
    Endereco
    Telefone
    AcervoLivros = []

    constructor(nome, endereco, telefone, acervo){
        this.Nome = nome
        this.Endereco = endereco
        this.Telefone = telefone
        this.AcervoLivros = acervo
    }

    buscarLivro(titulo){
        this.AcervoLivros.forEach(livro =>{
            if(livro.Titulo == titulo){
                console.log(livro)
            }
        })
    }

    emprestarLivro(titulo){
        let emprestado = false
        this.AcervoLivros.forEach(livro =>{
            if(livro.Titulo == titulo){
                if(livro.Disponibilidade == true){
                    livro.Disponibilidade = false
                    console.log('livro emprestado com sucesso')
                    emprestado = true
                } 
            }
        })
        return emprestado
    }

    devolverLivro(titulo){
        livros.forEach(livro =>{
            if(livro.Titulo == titulo){
                    livro.Disponibilidade = true
                    console.log('livro devolvido com sucesso')
                }
            }
        )
    }
}

let biblioteca = new Biblioteca('biblioteca publica', '123456', 'centro', livros )

biblioteca.buscarLivro('O Senhor dos Anéis')
biblioteca.emprestarLivro('Dom Quixote de la Mancha')
biblioteca.emprestarLivro('1984')
biblioteca.devolverLivro('1984')