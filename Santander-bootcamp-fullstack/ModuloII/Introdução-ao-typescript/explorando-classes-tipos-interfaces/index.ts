function soma(a: number, b: number) {
  return a + b;
};
console.log(soma(2, 1));
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

console.log(animal.executarRugido(10));

const felino: IFelinos = {
  nome: 'Leao',
  tipo: 'terrestre',
  visaoNoturna: true,
  executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`),
};

export {
  soma,
  animal,
  felino
}