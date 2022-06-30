// Sets:
// Sets são estruturas que armazenam apenas valores ṹnicos;

const myArray = [1, 2, 3, 4, 5, 5, 6, 6, 3, 4, 4, 1];

const mySet = new Set(myArray);

console.log(mySet);

// Diferença entre sets e arrays:
// Possui valores únicos;
// Em vez da propriedade length, consulta o número de registros pela propriedade size
// Não possui o método map, filter, reduce e etc;