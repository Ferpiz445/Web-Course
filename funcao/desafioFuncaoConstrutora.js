function Pessoa(nome){
    this.nome = nome

    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p3 = new Pessoa('Felipe')
p3.falar()
console.log(p3.nome)