const array = [1, 2, 3, 4, 5, 6, 7, 8];

const sumReduce = array.reduce((acc, curValue) => acc + curValue);

const prices = [
  {
    item: 'televisão',
    preco: 1200
  },

  {
    item: 'torradeira',
    preco: 100
  },

  {
    item: 'mesa',
    preco: 50
  }
];

const saldoDisponivel = 2000;

const calculaSaldo = prices.reduce((acc, curValue) => acc - curValue.preco, saldoDisponivel);

console.log(calculaSaldo);
