// var a                   a variavel faz esse içamento no javascript
console.log('a =', a)
var a = 2
console.log('a =', a)

/*
 *
 * console.log('a =', a)
 * console.log('a =', a)
 * 
 * aqui daria erro, por conta da variavel nao ser declarada
 * 
 */

function teste(){
    console.log('b =', b)
    var b = 5
    console.log('b =', b)
}

teste()
// console.log('b =', b)

// não é possivel fazer este içamento com o let
/*
 * console.log('a =', a)
 * let c = 10
 * console.log('a =', a)
 * 
 */