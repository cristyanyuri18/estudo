// LAÇOS CONDICIONAIS
let input = require('readline-sync')
let n_sorteado = 5
let n = Number(input.question('Qual numero vocer escolhe? '))
while (n !== n_sorteado) {
    console.log('Você errou o númeor. Tente novamente')
    n = Number(input.question('Qual numero vocer escolhe? '))
}
console.log('Você acertou!!!')
