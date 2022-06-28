var a = 1;
var b = 2;

if ( a === 1 ) {
  var a = 11; // O escopo é global
  let b = 22; // O escopo é por bloco
  console.log(a) // 11
  console.log(b) // 22
}

console.log(b) // 11
console.log(b) // 2

/* var, let e const, são formas de se declarar uma variável. Porém o var antes do ECMA 2015 era o único meio de se declarar uma variável. Porém dava muitos problemas pois o var não respeitava os escopos e davam problemas como os que são mostrados acima. Desta forma foram criados o let e o const.*/

/* Um dos problemas ocorridos na utilização de var, seria o hoisting, que é conseguir chamar a variável antes dela ser declarada, exemplo: */

num = 4;

console.log(num) // 4

var num;

/* Com let já não ocorre o mesmo problema:*/

num = 4;

console.log(num) // SyntaxError: Identifier 'num' has already been declared

let num;