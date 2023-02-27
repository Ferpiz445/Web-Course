function Carro(veloMax = 200, delta = 5){
    // atributo privado
    let veloAtual = 0

    // metodo publico
    this.acelerar = function(){
        if(veloAtual + delta <= veloMax){
            veloAtual += delta
        } else {
            veloAtual = veloMax
        }
    }

    // metodo publico
    this.getVeloAtual = function(){
        return veloAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVeloAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVeloAtual())

console.log(typeof Carro)
console.log(typeof ferrari)