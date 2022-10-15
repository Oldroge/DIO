const precoEtanol = 2.90;
const precoGasolina = 6.90;
let tipoDeCombustivel = precoEtanol;
const gastoDoCarroPorKm = 15;
let distanciaDaViagem = 315;

const gastoDaViagem = distanciaDaViagem / gastoDoCarroPorKm;
const precoDaViagem = gastoDaViagem * tipoDeCombustivel;

if (tipoDeCombustivel === precoEtanol) {
    console.log('O valor da viagem é (etanol): ' + precoDaViagem)
} else if (tipoDeCombustivel === precoGasolina) {
    console.log('O valor da viagem é (gasolina): ' + precoDaViagem)
};