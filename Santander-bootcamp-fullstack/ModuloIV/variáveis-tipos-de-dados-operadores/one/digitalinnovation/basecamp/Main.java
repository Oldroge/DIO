package one.digitalinnovation.basecamp;

public class Main {
    public static void main(String[] args) {
        int i;
//        int i; Não pode variáveis repetidas
        int I;
//        int 1a; Não pode variáveis se iniciar com número
        int _1a;
        int $aq;

        i = 5;
        I = 10;
        _1a = 20;
        $aq = 7;

        final int j = 10;
//        j = 15; Variáveis que contem o final são imutáveis
        int asrn24678nd;
        int asrn246_78nd = 0;
//        int asrn2$4678 nd = 10; Não pode variáveis com espaçamentos
//        int asrn2$46%78_nd = 10; Não pode variáveis com simbolos

        asrn24678nd = 100;
//        asrn2$4678_nd = 10; Não pode variáveis com simbolos

        int quantidadeProduto = 50;
//        int QuantidadeProduto; Não pode variáveis se iniciar com letras maiúsculas
        final int NUMERO_TENTATIVAS = 5;
//        final int  numeroTentativas = 5; variáveis iniciadas com final não é uma boa prática utilizar letras minúsculas
        int QUANTIDADE_OPÇÕES = 25;
//        int qtdProd; Variáveis abreviadas não é uma boa prática

        System.out.println(i);
        System.out.println(I);
        System.out.println(_1a);
        System.out.println($aq);
        System.out.println(j);
        System.out.println(asrn24678nd);
        System.out.println(asrn246_78nd);
        System.out.println(quantidadeProduto);
        System.out.println(NUMERO_TENTATIVAS);
        System.out.println(QUANTIDADE_OPÇÕES);

    }
}
