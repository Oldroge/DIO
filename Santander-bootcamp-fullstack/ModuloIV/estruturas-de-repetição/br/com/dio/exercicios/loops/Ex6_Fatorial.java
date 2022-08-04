package br.com.dio.exercicios.loops;

import java.util.Scanner;

public class Ex6_Fatorial {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.println("Fatorial: ");
        int fatorial = scan.nextInt();
        int multiplicacao = 1;
        for (int i = fatorial; i >= 1; i--) {
            multiplicacao *= i;
        }
        System.out.println("O fatorial de " + fatorial + " é: " + multiplicacao);

    }


}
