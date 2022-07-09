let valorAny: any;

// O tipo any aceita qualquer tipo de variável

valorAny = 3; // Number
valorAny = 'valor'; // string
valorAny = false; // boolean

// perceba que não aprensa erro de tipo do typescript
// mesmo com uma variável existente já tipada, o any ainda pode ser usado

let number: number = 3;
// se eu tentar atribuir esta variável com um tipo que não seja number, vai aprensentar um erro
number = 'valor';

// porém se eu atribuir essa mesma variável a um tipo any, ele aceita
number = valorAny;

// Variáveis do tipo any são uma má pratica e seria utilizado em raros casos onde seria a única opção dentro de um determinado contexto para se utilizar.