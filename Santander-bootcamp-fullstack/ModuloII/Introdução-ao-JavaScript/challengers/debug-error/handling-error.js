const numArray = (array, num) => {
  try {
    if (!array || !num) {
      throw new ReferenceError;
    };
  
    if (typeof array !== 'object' || typeof num !== 'number') {
      throw new TypeError;
    }
  
    if (array.length !== num) {
      throw new RangeError;
    }

    return array;

  } catch(e) {
    if (e instanceof ReferenceError) {
      console.log(e.stack)
      console.log('Obrigatório inserir os parâmetros');
    }

    if (e instanceof TypeError) {
      console.log(e.stack)
      console.log('O tipo de entrada está incorreto')
    }

    if (e instanceof RangeError) {
      console.log(e.stack)
      console.log('O tamanho dos parâmetros divergem')
    }
  }
};

console.log(numArray())
