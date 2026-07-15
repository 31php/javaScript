// Arrays (vetores);

const nome = ['phillip','thaiane'];

nome[2] = 'manuela'; //adicionando elementos ao final do vetor(array)
nome[3] = 'arthur';

//console.log(nome);
console.log(nome[1]); //acessando os elementos do vetor(array)

nome.push('charlote'); // adicionando elementos ao final do vetor(array)
console.log(nome);

nome.unshift('teodora'); // adicionando elemento so início do vetor(array)
console.log(nome);

nome.pop('');// removendo elemento do final do vetor(array)
console.log(nome);

nome.shift(); // removendo elementos do início do vetor(array)
console.log(nome);

delete nome[0];
console.log(nome); //removendo somente o valor do elemento, mas mantendo o índice do vetor(array)

delete nome[2];
console.log(nome);
console.log(nome);