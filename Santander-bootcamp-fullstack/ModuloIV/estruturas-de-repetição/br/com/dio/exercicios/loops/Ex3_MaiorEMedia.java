package br.com.dio.exercicios.loops;

import java.util.Scanner;

public class Ex3_MaiorEMedia {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int numeros;
        int count = 0;
        int maior = 0;
        int soma = 0;

        do {
            System.out.println("Numero: ");
            numeros = scan.nextInt();
            soma += numeros;

            if (numeros > maior) maior = numeros;
            count++;
        } while(count < 5);

        System.out.println("Maior: " + maior);
        System.out.println("Média: " + soma / 5);
    }
}
