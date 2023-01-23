function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (min, max) + min
    return Math.floor(valor)
}

let opcao = 0

do{
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhido foi ${opcao}.`)
} while(opcao != -1)

console.log('Até a próxima!')