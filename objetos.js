// COMO CRIAR UM OBJETO NO JAVASCRIPT?
let pessoa = {
    nome: 'Yuri',
    idade: 26,
    altura:1.66,
}
console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.altura)
// COMO ADICIONAR UM PAR CHAVE-VALOR?
pessoa.sexo = 'masculino'
console.log(pessoa)
// COMO REMOVER UM PAR CHAVE-VALOR?
delete pessoa.sexo
console.log(pessoa)
// COMO PERCORRER A CHAVES?
for (let chave in pessoa) {
    console.log(chave)
}