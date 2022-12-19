const escola = 'Cod3r'

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // sem retorno
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))

console.log(escola.substring(1)) // vai da posição 1 até o restante
console.log(escola.substring(0,3))

console.log('Escola'.concat(escola).concat("!")) //concatenar valores
console.log('Escola' + escola + '!')
console.log(escola.replace(3, 'e'))