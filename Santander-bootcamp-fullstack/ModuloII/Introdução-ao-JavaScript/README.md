# Contador

Desafio indicado a instrutora durante o curso de introdução ao JavaScript para fazer integração de um código javascript a uma página HTML.

## Desafios:
1. implementar os eventos usando o método addEventListener. :heavy_check_mark:

2. Criar condicionais que desabilitam o botão de incrementar ou decrementar quando count chegar a um determinado valor (ex.: 0 <= count >= 10). :heavy_check_mark:

3. Mude a cor do texto em CURRENT_NUMBER para vermelho quando o número for negativo. :heavy_check_mark:


---
### Comentários sobre o desenvolvimento do desafio:
O desafio pede para que desabilite o botão quando o número fica menor que 0 ou maior que 10, percebi que desenvolvendo dessa maneira precisaria atualizar a página para conseguir retomar as contagens do clique.
Devido a isso aproveitei e desenvolvi também uma condição que o botão habilite novamente caso o próximo número fosse superior a -1 ou inferior a 11.

O desafio também pedia para desenvolver o número entre 0 e 10, dificultando fazer o desafio 3 no qual ele pinta de vermelho caso o número fosse negativo. Pensando nisso desenvolvi para que ele pintasse apenas o primeiro número negativo, sem a necessidade de ficar apagando código.