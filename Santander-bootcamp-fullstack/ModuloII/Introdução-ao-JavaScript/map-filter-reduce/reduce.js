// REDUCE:
// O método reduce trabalha apenas com arrays e retorno um novo array, não fazendo alterações no array original. O reduce faz a acumulação de argumentos dentro das especificações passadas. Exemplo de sintaxe:
const array = [1, 2, 3, 4, 5];

const reduce = array.reduce((acc, currentValue) => acc + currentValue, 4)
// O acc é o acumulador, onde a cada iteração vai pegar o novo valor e acumular com o valor atual 'currentValue'.
// O currentValue é o valor atual da condição
// O número 4 é o valor iniciar setado para a condição, mas poderia ser qualquer outro número, dependendo da condição que precisa seguir.
console.log(reduce);
// 19

// A função reduce recebe 4 parâmetros:
// Acumulador (acc)
// valor atual (currentValue)
// index Atual (index)
// array original (array)
