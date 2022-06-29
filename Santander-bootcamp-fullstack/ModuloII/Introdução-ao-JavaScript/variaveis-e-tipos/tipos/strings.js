/* String é um tipo primitivo que são considerados entre duas aspas "", geralmente utilizado para incluir textos. */

const palindromo = "socorra me subi no onibus em marrocos";

/* Exemplos de utilização de strings: */

const concatenar = palindromo.concat(", mais alguma coisa");

console.log(concatenar); // socorra me subi no onibus em marrocos, mais alguma coisa

console.log(palindromo[0], palindromo[1], palindromo[2], palindromo[3], palindromo[4]);
// s o c o r

console.log(palindromo.length); // 37

console.log(palindromo + "\n" + concatenar) // \n Quebra de linha

console.log(palindromo + "\n\n" + concatenar) // \n Pula linhas

console.log(`Variável palindromo ${palindromo} e variável concatenar ${concatenar}`) // Template strings

console.log(palindromo.split("")) // separa por caracter, retorna uma lista

console.log(palindromo.split(" ")) // separa por expaço, retorna uma lista

console.log(palindromo.includes("subi")) // retorna true or false

console.log(palindromo.startsWith("S")) // Retorna true or false e é case sensitive

console.log(palindromo.endsWith("s")) // Retorna true or false e é case sensitive

console.log(palindromo.replace('socorra me', "ajuda me")) // O dado anterior por um novo dado

