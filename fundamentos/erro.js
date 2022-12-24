function tratarErroELancar(erro){
    // throw new Error('...')
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e) {
        tratarErroELancar()
    } finally {
        console.log('final')
    }
}

const obj = {name: 'Felipe'}
imprimirNomeGritado(obj)