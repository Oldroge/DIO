// O que é o This?
// A palavra reservada This é uma referência ao contexto de onde você está, geralmente utilizado em contextos de objetos, pois quando você vai tentar referenciar algo que está dentro de uma objeto sem a palavra This, ele vai buscar a referência de fora do Objeto, Exemplo:

const pessoa = {
  firstName: 'John',
  lastName: 'Doe',
  id: 1,
  fullName: function() {
    return this.firstName + ' ' + this.lastName
  },
};

console.log(pessoa.fullName()); // John Doe

// utilizando sem o this
const pessoa2 = {
  firstName: 'John',
  lastName: 'Doe',
  id: 1,
  fullName: function() {
    return firstName + ' ' + lastName
  },
};

// console.log(pessoa2.fullName()); // ReferenceError: firstName is not defined

// utilizando sem o this com variáveis externas:

const firstName = 'Kevin';
const lastName = 'Bill';

const pessoa3 = {
  firstName: 'John',
  lastName: 'Doe',
  id: 1,
  fullName: function() {
    return firstName + ' ' + lastName
  },
};

console.log(pessoa3.fullName()); // Kevin Bill

// Call method

// Com o call method é possível passar parametros para essa função separando-as por vírgulas:
const newObj = {
  num1: 4,
  num2: 3
};

function soma(a, b) {
  return this.num1 + this.num2 + a + b; 
};

console.log(soma.call(newObj, 1, 2));

// Apply method
// Muito parecido com o Call method, mas com uma pequena diferença, quando for passar os argumentos é necessário que esteja dentro de um Array:

const newObj2 = {
  num1: 4,
  num2: 3
};

function soma(a, b) {
  return this.num1 + this.num2 + a + b;
};

console.log(soma.apply(newObj, [1, 4]));
