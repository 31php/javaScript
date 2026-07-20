// objetos

// const pessoa = {
//     nome: 'phillip',
//     sobrenome: 'ferreira',
//     idade: 40
// }
// console.log(pessoa.nome, pessoa.sobrenome, pessoa.idade);

// function criaPessoa(nome, sobrenome, idade){
//     return { nome, sobrenome, idade };
// }
// const pessoa1 = criaPessoa('phillip', 'gonçalves', 40);
// const pessoa2 = criaPessoa('joão', 'salvino', 60);
// const pessoa3 = criaPessoa('Maria', 'esmeralda', 42);
// const pessoa4 = criaPessoa('pedro', 'salazar', 22);
// const pessoa5 = criaPessoa('suzana', 'cerqueira', 30);

// console.log(pessoa1.nome,pessoa1.sobrenome,pessoa1.idade);

function criarPessoa(nome, sobrenome, idade){
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade
  }
}
const pessoa1 = criarPessoa('Phillip', 'Ferreira', 40);
const pessoa2 = criarPessoa('Thaiane', 'Nascimento', 32);
console.log(pessoa1);
console.log(pessoa2);