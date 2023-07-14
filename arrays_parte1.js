// > ARRAYS

// - COMO CRIAR UM ARRAYS?
let arr = ['yuri', 28, 1.64, true]
console.log(arr)

// - COMO ACESSSAR OS ELEMENTOS DO ARRAY
console.long('Prmeiro:', arr(0))
console.long('Segundo:', arr(1))
console.long('Terceiro:', arr(2))
console.long('Quarto:', arr(3))
// - COMO OBTER O TAMANHO DO ARRAY
console.log('Tamanho do array: ', arr.length)
// - PERCORRENDO ARRAYS
for (let i = 0; i < 4; i ++){
    console.log(arr[i])
}
// SEGUNDO METADO PARA PERCORRER POR FORA DO ARRAYS
for (let elemento of arr) {
    console.log(elemento)
}
// TERCEIRO EXEMPLO CORRENDO POR DENTRO DO ARRAYS
for(let i in arr) {
    console.log(i)
}