package br.com.dio.exercicios.arrays;

public class Ex1_OrdemInversa {
    public static void main(String[] args) {
        int[] vetor = {0, -5, 15, 50, 8, 4};
        System.out.println("Vetor: ");
        for (int i = 0; i < vetor.length; i++) {
            System.out.print(vetor[i] + " ");
        }

        System.out.println("\nInverso");
        for (int i = vetor.length - 1; i >= 0; i--) {
            System.out.print(vetor[i] + " ");
        }
    }
}
