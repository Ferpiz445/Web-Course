// coleção dinâmica de pares chave/valor

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    propretario: {
        nome: 'Felipe',
        idade: 20,
        endereco: {
            logradouro: 'Rua Tal',
            numero: 777
        }
    }, 
    condutores: [{
        nome: 'Ana',
        idade: 41
    }, {
        nome: 'Gilberto',
        idade: 45
    }],
    calcularValorSeguro: function() {
        // ...
    }
}

carro.propretario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

delete carro.condutores
delete carro.propretario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)