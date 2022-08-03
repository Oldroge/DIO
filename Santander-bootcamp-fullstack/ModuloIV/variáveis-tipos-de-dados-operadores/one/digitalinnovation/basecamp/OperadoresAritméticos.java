package one.digitalinnovation.basecamp;

public class OperadoresAritméticos {
    public static void main(String[] args) {
        System.out.println("PrePos");
        prePos();
        System.out.println("Aritmético");
        aritmetico();

        System.out.println("Atribuição");
        atribuicao();
        System.out.println("Precedência");
        precedencia();
    }

    private static void prePos() {
        int a = 0;
        int b = a++;
        int c = ++a + a++;
        int d = a;
        int k = 10;
//      int i = k + 1;
        int i = ++k;
//        k = i;
        int j = k--;
        int x = k;
        System.out.println("b: " + b);
        System.out.println("c: " + c);
        System.out.println("d: " + d);
        System.out.println("i: " + i);
        System.out.println("k: " + k);
        System.out.println("j: " + j);
        System.out.println("x: " + x);
    }

    private static void aritmetico() {
        int a = 10;
        int b = 20;
        int c = 30;
        int d = 40;
        int e = 50;

        int r1 = a + b;
        int r2 = a - b;
        int r3 = d * b;
        int r4 = e / a;
        int r5 = c % b;

        System.out.println("a + b = " + r1);
        System.out.println("a - b = " + r2);
        System.out.println("a * b = " + r3);
        System.out.println("a / b = " + r4);
        System.out.println("a % b = " + r5);

    }

    public static void atribuicao() {
        int i = 1500;
        short j = 15;
        long l = 500L;
        int k = 35;
        float f = 3.5f;
        double d = f;

        System.out.println("d: " + d);

        i += 5;
        j -= 3;
        d /= 2.7d;
        l *= 3;
        k %= 2;

        System.out.println("i: " + i);
        System.out.println("j: " + j);
        System.out.println("d: " + d);
        System.out.println("l: " + l);
        System.out.println("k: " + k);
    }

    public static void precedencia() {
        int i = 10;
        int j = 20;
        int k = 30;

        int a = i++ + --j * k;

        System.out.println("i++ + --j * k: " + a);
        System.out.println("i: " + i);

        int b = k / --i % 3 + 1;

        System.out.println("k / --i % 3 + 1: " + b);
        System.out.println("i: " + i);

        int c = 2;
        c *= i += 5;
        System.out.println("c *= i += 5: " + c);
    }
}
