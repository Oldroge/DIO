package br.com.dio.model;

import java.util.Objects;

public class Gato {
    private String nome;
    private String cor;
    private Integer idade;
//    Constructor
    public Gato() {}
//    Constructor
    public Gato(String nome, String cor, Integer idade) {
        this.nome = nome;
        this.cor = cor;
        this.idade = idade;
    }

//    Geter
    public String getNome() {
        return nome;
    }
//  insert
    public void setNome(String nome) {
        this.nome = nome;
    }
//  geter
    public String getCor() {
        return cor;
    }
//  Insert
    public void setCor(String cor) {
        this.cor = cor;
    }
    //  geter
    public Integer getIdade() {
        return idade;
    }
//  Insert
    public void setIdade(Integer idade) {
        this.idade = idade;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Gato gato = (Gato) o;
        return Objects.equals(nome, gato.nome) && Objects.equals(cor, gato.cor) && Objects.equals(idade, gato.idade);
    }

    @Override
    public int hashCode() {
        return Objects.hash(nome, cor, idade);
    }

    @Override
    public String toString() {
        return "Gato{" +
                "nome='" + nome + '\'' +
                ", cor='" + cor + '\'' +
                ", idade=" + idade +
                '}';
    }
}
