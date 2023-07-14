let numero = 10
// IGUALDADE: == (OU ===)
console.log(numero == 10)
// DESIGUALDADE: !=(OU !==)
console.log(numero !== 10)
// MAIOR QUE: >
console.log(numero > 10)
// MAIOR OU IGUAL: >=
console.log(numero >= 10)
// MENOR QUE: <
console.log(numero < 10)
// MENOR OU IGUAL: <=
console.log(numero <= 10)
console.clear()
// - CONJUÇÕES LÓGICAS

// AND => &&
let idade = 18
let tenhoCNH = true

let possoDirigir = idade >= 18 && tenhoCNH === true
console.log('Posso dirigir?', possoDirigir)

// OR => ||
idade = 40

const votoFacultativo = idade < 18 || idade >= 70
// NOT => !
const estuouGostandoDoCurso = false
console.log(!estuouGostandoDoCurso)