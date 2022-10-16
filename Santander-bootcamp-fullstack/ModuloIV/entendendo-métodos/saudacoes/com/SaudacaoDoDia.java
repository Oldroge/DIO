package saudacoes.com;

public class SaudacaoDoDia {
    public void saudacao(int hora) {
        switch (hora) {
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
                bomDia();
                break;
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
                boaTarde();
                break;
            case 19:
            case 20:
            case 21:
            case 22:
            case 23:
            case 00:
            case 01:
            case 02:
            case 03:
            case 04:
                boaNoite();
                break;
            default:
                System.out.println("Hora inválida");
                break;
        }

    }
    public void bomDia() {
        System.out.println("Bom dia!");
    }
    public void boaTarde() {
        System.out.println("Boa tarde!");
    }
    public void boaNoite() {
        System.out.println("Boa noite!");
    }
}
