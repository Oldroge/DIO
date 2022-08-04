package br.com.dio.exercicios.loops;

import java.util.Scanner;

public class Ex5_Tabuada {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.println("Tabuada: ");
        int tabuada = scan.nextInt();

        int count = 0;
        while(count < 10) {
            count++;
            System.out.println(tabuada + " X " + count + " = " + tabuada * count);

        }
    }
}
