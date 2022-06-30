// FILTER
// O método filter() trabalha apenas com arrays e não faz alterações no array original, apenas cria um novo array e retorna. Como o próprio nome já diz ele filtra o ítem que respeite a condição solicitada, exemplo de sintaxe:
const array = [1, 2, 3, 4, 4, 2, 1];

const filter = array.filter((callback) => callback === 1);
// Aqui foi filtrado pelo número 1 e ele retorno todos os números 1 que encontra.

console.log(filter);
// [ 1, 1 ]

// A callback do método filter() possui 3 parâmetros:
// elemento: O elemento que está sendo processado no array
// index: O índice do elemento atual que está sendo processado
// array: o array no qual o filter fooi chamado

array.filter((element, index, array) => {
  console.log(
    'elemento: ', element,
    'Index: ', index,
    'array: ', array
    )
})
// OUTPUT:
// elemento:  1 Index:  0 array:  [
//   1, 2, 3, 4,
//   4, 2, 1
// ]
// elemento:  2 Index:  1 array:  [
//   1, 2, 3, 4,
//   4, 2, 1
// ]
// elemento:  3 Index:  2 array:  [
//   1, 2, 3, 4,
//   4, 2, 1
// ]
// elemento:  4 Index:  3 array:  [
//   1, 2, 3, 4,
//   4, 2, 1
// ]
// elemento:  4 Index:  4 array:  [
//   1, 2, 3, 4,
//   4, 2, 1
// ]
// elemento:  2 Index:  5 array:  [
//   1, 2, 3, 4,
//   4, 2, 1
// ]
// elemento:  1 Index:  6 array:  [
//   1, 2, 3, 4,
//   4, 2, 1
// ]