// Maps
// Características:
// - Uma coleção de arrays no formato [chave, valor];
// Pode ser iterado por um loop for... of
const myMap = new Map();

myMap.set('novaChave', 'novo valor');
// Map(1) { 'novaChave' => 'novo valor' }

myMap.get('novaChanve');
// "novo valor"

myMap.delete('novaChave');
// true

myMap.get('apple');
// undefined

// Maps pode ter chave de qualquer tipo
// maps possuem a propriedade length
// maps são mais fáceis de iterar
// utilizado quando o valor das chaves é desconhecido
// Os valores tem o mesmo tipo
