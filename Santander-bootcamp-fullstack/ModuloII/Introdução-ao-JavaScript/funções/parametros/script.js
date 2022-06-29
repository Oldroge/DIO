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

console.log("Objeto arguments", findMax(1, 2, 3))


// Spread & arrays
function sum(a, b, c) {
  return a + b + c;
};

const arrayNums = [1, 2, 3];

console.log("spread operator", sum(...arrayNums));

// Arrays Rest

function confereTamanho(...args) {
  console.log(args.length);
};

console.log("\nArrays rest")
confereTamanho();
confereTamanho(1, 2);
confereTamanho(1, 2, 3, 'string', [1, 2, 3]);

// Object destructuring:
const user = {
  id: 42, 
  displayName: 'jdoe',
  fullName: {
    firstName: 'John',
    lastName: 'Doe'
  }
};

function desestruraId({id}) {
  return id;
};

console.log("Object destructuring", desestruraId(user));