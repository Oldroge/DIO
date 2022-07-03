interface Pessoa {
  nome: String;
  idade: number;
  nacionalidade: String;
}

// OMIT
// Omite a propriedade que deseja que não apareça
interface Brasilero extends Omit<Pessoa, 'nacionalidade'> {

}