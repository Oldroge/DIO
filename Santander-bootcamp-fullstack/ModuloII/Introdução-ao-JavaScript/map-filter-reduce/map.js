// MAP

// Map é um método para se trabalhar com arrays, como o nome já diz, ele mapeia todos os ítens dentro do array e retorno um novo array. OBS.: O array original não sofre alterações.

// Pode-se definir o que você deseja que se retorno em um novo array, exemplo de sintaxe:

const array = [1, 2, 3, 4, 5];

const map = array.map((callback) => callback);

console.log(map)

// Dentro da callback ele recebe 3 valores:
// valorAtual: o valor original da array
// indice: o índice do elemento atual que está sendo processado na Array
// Array: O array de origem

array.map((currentValue, index, array) => console.log(
  'currentValue', currentValue,
  'index', index,
  'array', array
  ));

// Por baixo dos panos faz a operação de maneira similar ao laço for, a iteração é medida pelo tamanho do array;
