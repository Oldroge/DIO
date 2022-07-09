// O tipo unknown funciona de uma maneira 'parecida' com o tipo any
// relembrando:
let variavel: any;
variavel = 3; // number
variavel = 'string'; // string
variavel = false; // boolean

let string: string = 'novo texto';
string = variavel;

let variavel2: unknown;
variavel2 = 3; // number
variavel2 = 'string'; // string
variavel2 = false; // boolean

let string2: string = 'novo texto';
string2 = variavel2; // aqui ele não aceita
// Ao contrário do any que pode atribuir qualquer tipo e usar de forma como se fosse qualquer tipo. O unknown pode-se atribuir qualquer tipo, porém ao utilizar ele, ele não é de tipo nenhum. Então quando utilizar variaveis do tipo unknown, seria ideia fazer uma validação:

if (typeof variavel2 === 'string') {
    string2 = variavel2; // aqui ele aceita
};


