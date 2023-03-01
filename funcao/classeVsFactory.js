class Pessoa{
    constructor(nome){
        this.name = nome
    }

    falar(){
        console.log(`Meu nome é ${this.name}`)
    }
}

const p1 = new Pessoa('Felipe')
p1.falar()

const pessoa = name => {
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = pessoa('Monteiro')
p2.falar