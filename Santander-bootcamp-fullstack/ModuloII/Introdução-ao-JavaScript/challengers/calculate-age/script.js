const person = {
  nome: 'John',
  idade: 29
}

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

console.log(calculaIdade.call(person, 10))

console.log(calculaIdade.apply(person, [10]))
