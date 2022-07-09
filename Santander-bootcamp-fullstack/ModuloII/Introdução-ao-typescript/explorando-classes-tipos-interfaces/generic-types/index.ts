// Generic Types

function adicionaAlgoNoFimDaLista<T>(array: T[], valor: T) {
  return array.map(() => valor);
}

console.log(adicionaAlgoNoFimDaLista([1, 2, 'a'], 2));
