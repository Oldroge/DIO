const pessoa = {
    nome: "Mariana",
    idade: 28,
    profissao: "desenvolvedora"
};

pessoa.idade = 25;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: "Andre",
    idade: 25,
    profissao: "pintor"
}

const paula: {nome: string, idade: number, profissao: string} = {
    nome: "Paula",
    idade: 25,
    profissao: "Desenvolvedora"
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    jogadoraDeFutebol
};

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
};

interface estudante extends Pessoa {
    materias: string[]
}

const vanessa: Pessoa = {
    nome: "Vanessa",
    idade: 24,
    profissao: Profissao.Desenvolvedora
};

const Maria: Pessoa = {
    nome: "Maria",
    idade: 24,
    profissao: Profissao.Desenvolvedora
};

const Jessica: estudante = {
    nome: "Jessica",
    idade: 20,
    materias: ['Matematica', 'programação']
};

function listar(list: string[]) {
    for (const item of list) {
        console.log('- ', item)
    }
}

listar(Jessica.materias);
