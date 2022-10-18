// calcule IMC
// formula para IMC:
// IMC = peso / (altura * altura)

// Tabela de IMC
/*
 - Abaixo de 18.5 Abaixo do peso;
 - Entre 18.5 e 25 peso normal;
 - entre 25 e 30 acima do peso;
 - entre 30 e 40 obeso;
 - Acima de 40 obesidade grave
*/

const peso = 83;
const altura = 1.83;

const IMC = peso / Math.pow(altura, 2);

if (IMC < 18.5) {
    console.log('Abaixo do peso')
} else if (IMC >= 18.5 && IMC < 25) {
    console.log('Peso normal')
} else if (IMC >= 25 && IMC < 30) {
    console.log('Acima do peso')
} else if (IMC >= 30 && IMC < 40) {
    console.log('Obeso')
} else {
    console.log('Obesidade Grave')
}