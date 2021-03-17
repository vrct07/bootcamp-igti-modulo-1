var pessoa = {
    nome: "João",
    idade: 40,
    telefone: "(99) 99999-9999",
    temCarro: true,
    animaisDeEstimacao: [
        "totó",
        "bob"
    ],
    pai: {
        nome: "José",
        idade: 68
    },

    mae: {
        nome: "Maria",
        idade: 58
    }
    
};

//console.log(pessoa);
//console.log(pessoa.nome);
//console.log(pessoa.mae.nome);
pessoa.animaisDeEstimacao.push("milo");
pessoa.nome += " Silva";
console.log(pessoa.nome);
