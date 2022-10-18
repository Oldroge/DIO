class Pessoa {
    name;
    age;
    birthYear;

    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.birthYear = 2022 - age;
    }

    description() {
        return `My name is ${this.name} and I'm ${this.age} years old`
    }
}

const Roge = new Pessoa('Roge', 27);

console.log(Roge.description());