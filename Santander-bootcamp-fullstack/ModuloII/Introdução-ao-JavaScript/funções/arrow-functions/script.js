// Arrow functions

// Outra maneira interessante de se declarar uma função são as arrow functions, que o retorno fica implícito quando feito em apenas uma linha:

const nomeDaVariavel = () => 'Olá variável';

console.log(nomeDaVariavel());

const soma = (a, b) => a + b;
console.log(soma(1, 2));

// Restrições:
// Não consegue utilizar o this
// Não existe o objeto arguments
// o construtor 'new' não pode ser inicializado em uma arrow function
