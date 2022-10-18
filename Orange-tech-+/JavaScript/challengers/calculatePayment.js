const todasFormasDePagamento = {
    1: 'Debito',
    2: 'Pix',
    3: 'Dinheiro',
    4: '2x Sem Juros',
    5: 'Mais de 2x Com Juros'
}

const precoProduto = 100;
const descontoDez = precoProduto - (precoProduto * 0.1);
const descontoQuinze = precoProduto - (precoProduto * 0.15);
const juros = precoProduto * 0.1;
const qtdDeVezes = 3;
const formaDePagamento = todasFormasDePagamento[5];


if (formaDePagamento === todasFormasDePagamento[1]) {
    console.log('Desconto de 10% a vista: ', descontoDez)
} else if (formaDePagamento === todasFormasDePagamento[2] || formaDePagamento === todasFormasDePagamento[3]) {
    console.log('Desconto de 15% a vista no pix ou dinheiro: ', descontoQuinze)
} else if (formaDePagamento === todasFormasDePagamento[4]) {
    console.log('Até duas vezes sem juros ', precoProduto / 2)
} else if (formaDePagamento === todasFormasDePagamento[5]) {
    console.log('Mais que duas vezes com juros ',precoProduto + precoProduto * 0.1);
}