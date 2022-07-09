function somarValoresETratar(num1: number, num2: number, callback: (numero: number) => number): number {
    let resultado = num1 + num2;
    return callback(resultado);
}

function aoQuadrado(numero: number): number {
    return numero * numero;
};

function dividir(numero: number): number {
    return numero / numero;
};

console.log(somarValoresETratar(1, 2, aoQuadrado));
console.log(somarValoresETratar(1, 2, dividir));
