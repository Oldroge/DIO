import calculo.com.MetodosDeCalculo;
import emprestimo.com.Emprestimo;
import overload.com.Overload;
import saudacoes.com.SaudacaoDoDia;

public class main {
    public static void main(String[] args) {
        MetodosDeCalculo calcular = new MetodosDeCalculo();
        System.out.println("Calculo:");
        calcular.soma(2, 3);
        calcular.subtrair(2, 3);
        calcular.multiplicar(2, 3);
        calcular.dividir(5, 2);
        System.out.println("=========================");

        SaudacaoDoDia saudacao = new SaudacaoDoDia();
        System.out.println("Saudação do dia:");
        saudacao.saudacao(14);
        saudacao.saudacao(12);
        saudacao.saudacao(02);
        System.out.println("=========================");

        Emprestimo emprestimo = new Emprestimo();
        System.out.println("Exercício empréstimo");
        emprestimo.calcular(1000, Emprestimo.getDuasParcelas());
        emprestimo.calcular(1000, Emprestimo.getTresParcelas());
        emprestimo.calcular(1000, 5);

        System.out.println("===================");

        System.out.println("OVERLOAD");
        Overload quadrilateros = new Overload();

        quadrilateros.area(4);
        quadrilateros.area(2, 4);
        quadrilateros.area(3, 2, 5);
    }
}
