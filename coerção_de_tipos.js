//  COERÇÃO (CONVERSÃO) DE TIPOS

// COERÇÃO EXPLICITA (MANUAL)
let numero = 10
console.log (numero, typeof numero)
console.log(Number('163163'))
console.log(parseFloat('2135616.46546'))
console.log(Boolean(1))
// COERÇÃO IMPLICITA (AUTOMÁTICA)
console.log(10 + 1)
console.log(10 - 2)
console.log(10 * 3)
console.log(10 ** 3)

let n = 1 + "1"

n = n - 1
console.log(n)

console.log(2 + 3 + 4 + "5")
console.log("5" + 2 + 3 + 4)
console.log("10" - "4" - "3" - 2 + "5")