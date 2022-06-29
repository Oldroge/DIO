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
    console.log(a + b);
  }
)(1, 2);
