class Carro {
    marca;
    cor;
    combustivelPorKm;

    constructor(marca, cor, combustivelPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.combustivelPorKm = combustivelPorKm;
    }

    calcularGasto(distancia, precoCombustivel) {
        return distancia * this.combustivelPorKm * precoCombustivel;

    }
}

const cherryQQ = new Carro('cherry', 'amarela', 1 / 16);

console.log(cherryQQ.calcularGasto(380, 5.90).toFixed(2));