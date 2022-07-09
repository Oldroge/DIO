// Função comum:
function nomeDaFunção(parametros) {
  // escopo de lógica

  return //Quando necessário retornar algum valor
};

// Função anônima:
const nomeDaVariável = function () {
  // escopo de lógica

  return // quando necessário retornar algum valor
};

// Função autoinvocável:
(
  function() {
    let variavel = "Algum valor";
    console.log(variavel);
  }
)();

// função autoinvocável com parâmetros:
(
  function(a, b) {
    console.log("função autoinvocável", a + b);
  }
)(1, 2);


// CALLBACKS:
const calc = function(operacao, param1, param2) {
  return operacao(param1, param2);
};

const soma = function(num1, num2) {
  return num1 + num2;
};

const diminuir = function(num1, num2) {
  return num1 - num2;
};

const resultadoSoma = calc(soma, 2, 3);
const resultadoDiminuir = calc(diminuir, 2, 3);

console.log("resultado Soma", resultadoSoma);
console.log("resultado diminuir", resultadoDiminuir);