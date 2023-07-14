// ARRAYS PARTE 2 MÉTODOS DE ARRAYS
let arr1 = [30, 40, 50, 54, 29]
let arr2 = []
// FATIAMENTO: SLICE
console.log(arr1.slice(0, 2))
console.log(arr1.slice(2))
console.clear()
// ADICIONANDO ELEMENTOS: PUSH | UNSHIFT
console.log('Antes de adicionar:', arr2)
arr2.push(10)
arr2.push(40)
console.log('Depois de adicionar:', arr2)
//  UNSHIFT
console.log('Antes de adicionar com unshift', arr2)
arr2.unshift(10)
console.log('Depois de adicionar com unshift', arr2) 
console.clear()
// REMOVENDO ELEMENTO: POP | SHIFT
// POP REMOVE OU ADICIONA OS ULTIMOS
console.log('Antes de remover com o pop:', arr2)
let elementoRemovido = arr2.pop()
console.log('Depois de remover com o pop:', arr2)
console.log('O elemento removido foi', elementoRemovido)
// SHIFT REMOVE OU ADICIONA ANTES 
console.log('Antes de remover com o shift:', arr2)
arr1.shift()
console.log('Depois de remover com o shift:', arr2)
console.clear()
// CONCATENANDO ARRAYS: CONCAT juuta os arrays
console.log('arr1', arr1)
console.log('arr2', arr2)
console.log(arr1.concat(arr2))
// BUSCANDO ELEMENTO: INDEXOF | LASTINDEXOF
console.log(arr1)
let indiceDoElemento40 = arr1.indexOf(40)
console.log(indiceDoElemento40)
let arr3 = [1, 2, 3, 3, 5, 3]
console.log(arr3.lastIndexOf(3))
console.clear()
// DESCOBRINDO A EXISTÊNCIA DE UM ELEMENTO: INCLUDES
console.log(arr1)
console.log(arr1.includes(5))
console.clear()
// INVERTENDO ARRAYS: REVERSE
console.log('arr1 normal:', arr1)
let arr1Invertido = arr1.reverse()
console.log('arr1 invertido:', arr1Invertido)