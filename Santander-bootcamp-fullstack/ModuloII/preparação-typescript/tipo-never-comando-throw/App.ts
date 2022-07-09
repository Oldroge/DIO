function erro(erro: string, codigo: number): never {
    throw {
        error: erro,
        code: codigo
    }
};

erro('Not found', 404);

// O tipo never é usado quando a função nunca é encerrada, por alguma razão o código ficou rodando ou precisou ficar em execução.
