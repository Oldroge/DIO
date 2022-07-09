// O tipo void ele informa que a função não tem retorno algum

function calculaValores(num1: number, num2: number): void {
    console.log(num1 + num2)
    return num1 + num2
    // Type 'number' is not assignable to type 'void'.
};
