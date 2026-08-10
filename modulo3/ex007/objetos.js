const pessoa = {
    nome:'phillip',
    Sobrenome: 'gonçalves',
    idade: 40,
    endereço: {
        rua: 'francisco anacleo',
        numero: 170,
        complemento: 'fundos',
    }

}
// Modo convencional

// console.log(pessoa);
// console.log(pessoa.nome);
// console.log(pessoa.Sobrenome);
// console.log(pessoa.idade);
// console.log(pessoa.endereço);
console.log(pessoa.endereço.rua);

// via desestruturação
const { nome, Sobrenome, idade} = pessoa;
console.log(nome, Sobrenome);