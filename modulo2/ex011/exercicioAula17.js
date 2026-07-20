// Arrays (vetores);

const nome = ['phillip','tahiane'];

console.log(nome);

nome[2] = 'charlote'; // adicionando elementos ao vetor(array)
console.log(nome);

nome.push('Manuela'); // adicionando elementos ao final do vetor(array)
console.log(nome);

nome.unshift('Arthur');
console.log(nome); // adicionando elementos no início do vetor(array)

nome.pop();
console.log(nome); //excluindo elementos no final do vetor(array)

nome.shift();
console.log(nome); // excluindo elementos no início do vetor(array)

delete nome[2];
console.log(nome); // alterando somente o valor e deixando o espaço vazio