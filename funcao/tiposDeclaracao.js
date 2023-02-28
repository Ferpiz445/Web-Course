// function declaration
// pode ser chamada de qualquer lugar, pois o interpretador do js lê primeiro as funções declaradas

console.log(soma(2, 3))

function soma(x, y){
    return x + y
}

// function expression
// constante atribuida a partir da linha 9

const sub = function (x, y){
    return x - y
}
console.log(sub(2, 3))

// named function expression
// constante atribuida a partir da linha 16

const mult = function mult(x, y){
    return x * y
}
console.log(mult(2, 3))