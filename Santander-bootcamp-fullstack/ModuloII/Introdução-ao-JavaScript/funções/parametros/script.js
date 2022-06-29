// Objeto argumentos:
// O Objeto arguments não é um Array, apesar de armazenar os argumentos da mesma maneira, não é possível utilizar os método de um array, exceto o length.

// Caso não saiba especificar quantos argumentos se espera, interessante a utilização do objeto arguments;

function findMax() {
  let max = -Infinity;

  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
};

console.log(findMax(1, 2, 3))
