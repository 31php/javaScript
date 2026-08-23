/*laços de repetição(loop for)

para criar o laço, usamos a palavra reservada FOR

1º Criamos uma variável e damos um nome e um valor a ela
ex:. for(let i = 0)

2º criamos uma condição, quantas vezes o laço irá se repetir
ex:. for(let i = 0;i <= 5)

3º criamos o operador de incremento
ex:. for(let i = 0;i <= 5;i++ ou i = i + 1){
    fechamos com chaves para criar o corpo do laço
}
*/

for(let i = 0; i <= 5;i = i + 1){
    console.log(i);
}
//  const nomes = ['phillip', 'thaiane', 'manuela', 'arthur'];
//  for(let i = 0; i < nomes.length;i = i + 1){
//     console.log(nomes[i]);
// }
// const numeros = [1, 2, 3, 4, 5, 6];

// for(let i = 0;i < numeros.length;i = i + 1){
//     console.log(numeros[i]);}

// Tabuada
// for(let i = 0;i <= 10;i = i + 1){
//     const numero = 2;
//     console.log(numero * i);
// }
//Números pares

// const numeros = [1,2,3,4,5,6,7,8,9,10];

// for(let i = 0;i < numeros.length;i++){
    
//     if(numeros[i] % 2 == 0){
//     console.log(`O numeros pares são: ${numeros[i]}`);
//     }
// }
// somando valores

// const valores = [12.50, 20.35, 40, 10, 7.50];
// let soma = 0;

// for(let i = 0;i < valores.length;i = i + 1){
//     soma = soma + valores[1];
//     console.log(`o valor total é: ${soma}`);
// }
// pontuação total de um jogo
const pontos = [100,200,300,450];
let totalDePontos = 0;

for(let i = 0;i <pontos.length;i = i + 1){
    totalDePontos = totalDePontos + pontos[i];
    console.log(`o total de pontos é: ${totalDePontos}`); 
} 

// Notas de uma avaliação

const notas = [10, 10, 9.5, 5];
let somaNotas = 0;

for(let i = 0;i < notas.length;i++){
    somaNotas = somaNotas + notas[i];   
}
console.log(`total das notas: ${somaNotas}`);

