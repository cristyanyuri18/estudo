// LAÇO NUMÉRICO: FOR
let input = require('readline-sync')
// O PROBLEMA

console.clear()
// ACUMULADOR
let acumulador = 0
acumulador -= 10
acumulador += 2
acumulador ++
console.log(acumulador)
console.clear()
// ESTRUTURA FOR
for (let i = 0; i < 12; i++) {
    console.log('Repetição', i)
}
console.clear()
// RESOLVENDO PROBLEMA INICIAL
let nota;
let soma = 0 
for(let i = 1; i <= 3; i++){
    nota = Number(input.question(`Informe a nota ${i} do aluno: `))
    soma = soma + nota
}
console.log(`A média do aluno é: ${soma / 3}`)

