function soma(a: number, b: number) {
  return a + b;
};
soma(1, 2);


// Types
// Interfaces

interface IAnimal {
  nome: string,
  tipo: 'terrestre' | 'aquático',
  executarRugido(alturaEmDecibeis: number): void;
}

interface IFelinos extends IAnimal {
  visaoNoturna: boolean;

}

const animal: IAnimal = {
  nome: 'Elefante',
  tipo: 'terrestre',
  executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`),
}

animal.executarRugido(10);

const felino: IFelinos = {
  nome: 'Leao',
  tipo: 'terrestre',
  visaoNoturna: true,
  executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`),
};