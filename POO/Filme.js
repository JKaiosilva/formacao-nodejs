class Filme {
    constructor(){
        this.titulo = '';
        this.ano = 0;
        this.genero = '';
        this.diretor = '';
        this.atores = [];
        this.duracao = 0;
    }

    Reproduzir(){
        console.log(`Reproduzindo: ${this.titulo}`)
    }
    Pausar(){
        console.log('Pausado')
    }
    Avançar(){
        console.log("Avançar")
    }
    Fechar(){
        console.log('Fechar')
    }
}

var origem = new Filme()
origem.titulo = 'origem'

origem.Reproduzir()