// FUNÇÕES
// DEFINIÇÃO DA FUNÇÃO
function saudacao() {
    console.log('Olá, seja bem-vindo(a) ao nosso curso de JavaScript')
}
saudacao()
console.clear()
//COMO ENVIAR PARÂMETROS PARA AS FUNÇÕES
function saudacao(nome='Yuri', curso='JavaScript') {
    console.log(`Olá, ${nome} seja bem-vindo(a) ao nosso curso de ${curso}`)
}
saudacao()
console.clear()
// RETORNO DA FUNÇÃO
function soma(n1, n2) {
    return n1 + n2
}
let resultado = soma (10, 20)
console.log(resultado / 2)
console.clear()

function maiorDoQue50 (n) {
    if (n > 50) {
        return true
    }
    return false
}