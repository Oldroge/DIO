const nota1 = 5;
const nota2 = 7;
const nota3 = 9;

const media = (nota1 + nota2 + nota3) / 3;
console.log(media)

if (media >= 7) {
    console.log('Aprovado')
} else if (media < 5) {
    console.log('Reprovado')
} else {
    console.log('Recuperação')
}