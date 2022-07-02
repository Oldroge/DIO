"use strict";
exports.__esModule = true;
exports.felino = exports.animal = exports.soma = void 0;
function soma(a, b) {
    return a + b;
}
exports.soma = soma;
;
console.log(soma(2, 1));
var animal = {
    nome: 'Elefante',
    tipo: 'terrestre',
    executarRugido: function (alturaEmDecibeis) { return ("".concat(alturaEmDecibeis, "dB")); }
};
exports.animal = animal;
console.log(animal.executarRugido(10));
var felino = {
    nome: 'Leao',
    tipo: 'terrestre',
    visaoNoturna: true,
    executarRugido: function (alturaEmDecibeis) { return ("".concat(alturaEmDecibeis, "dB")); }
};
exports.felino = felino;
