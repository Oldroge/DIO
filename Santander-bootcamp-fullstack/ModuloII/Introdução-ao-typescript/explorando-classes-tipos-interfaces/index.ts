function soma(a: number, b: number) {
  return a + b;
};
console.log(soma(2, 1));
// Types
// Interfaces

interface IAnimal {
  nome: string,
  tipo: 'terrestre' | 'aquático',
  domestico: boolean
}

interface IFelinos extends IAnimal {
  visaoNoturna: boolean;

}

interface ICanino extends IAnimal {
  porte: 'pequeno' | 'medio' | 'grande';
}

type IDomestico = IFelinos | ICanino;

const domestico: IDomestico = {
  domestico: true,
  nome: 'cachorro',
  porte: 'medio',
  tipo: 'terrestre'
}

const animal: IAnimal = {
  nome: 'Elefante',
  tipo: 'terrestre',
  domestico: false
}

const felino: IFelinos = {
  nome: 'Leao',
  tipo: 'terrestre',
  domestico: false,
  visaoNoturna: true,
};

export {
  soma,
  animal,
  felino,
  domestico
}

// Se utilizam Interfaces para definir os tipos de interfaces/contratos para todos os objetos
// Se utilizam types para quando for definir um alias para tipos primitivos e realizar merge entre as interfaces
