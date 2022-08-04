package br.com.dio.exercicios.loops;

import java.util.Scanner;

public class Ex2_Nota {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        while (true) {
            System.out.println("Informe uma nota entre zero e dez: ");
            int nota;
            nota = scan.nextInt();

            if (nota > 10 || nota < 0) {
                System.out.println("Nota inválida");
            } else {
                break;
            }
        }
    }
}
