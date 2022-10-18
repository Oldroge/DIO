class Pessoas {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculaIMC() {
        return this.peso / (Math.pow(this.altura, 2));
    }

    classificaIMC() {
        const IMC = this.calculaIMC();
        if (IMC < 18.5) {
            return 'Abaixo do peso';
        } else if (IMC >= 18.5 && IMC < 25) {
            return 'Peso normal';
        } else if (IMC >= 25 && IMC < 30) {
            return 'Acima do peso';
        } else if (IMC >= 30 && IMC < 40) {
            return 'Obeso';
        } else {
            return 'Obesidade Grave';
        }
    }

    description() {
        return (
            `${this.nome}, com o peso de ${this.peso}kg
            e altura de ${this.altura} tem o IMC de ${this.calculaIMC().toFixed(2)}
            está ${this.classificaIMC()}
            `
        )
    }
}

const roge = new Pessoas('Roge', 98, 1.83);
console.log(roge.description());