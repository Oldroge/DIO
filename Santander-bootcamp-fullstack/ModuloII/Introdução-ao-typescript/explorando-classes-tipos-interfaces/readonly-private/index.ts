interface Cachorro {
  nome: String;
  idade: number;
  parqueFavorito?: String;
};

type CachorroReadOnly = {
  readonly [K in keyof Cachorro]-?: Cachorro[K];
}

class MeuCachorro implements CachorroReadOnly {
  idade: number;
  nome: String;
  parqueFavorito: String;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }
}

const cao = new MeuCachorro('Alaska', 8);
