/*laços de repetição(loop for)

para criar o laço, usamos a palavra reservada FOR

1º Criamos uma variável e damos um nome e um valor a ela
ex:. for(let i = 0)

2º criamos uma condição, quantas vezes o laço irá s repetir
ex:. for(let i = 0;i <= 5)

3º criamos o operador de incremento
ex:. for(let i = 0;i <= 5;i++ ou i = i + 1){
    fechamos com chaves para criar o corpo do laço
}
*/

// for(let i = 0; i <= 5;i = i + 1){
//     console.log(i);
// }
 const nomes = ['phillip', 'thaiane', 'manuela', 'arthur'];
 for(let i = 0; i < nomes.length;i = i + 1){
    console.log(nomes[i]);
}
const numeros = [1, 2, 3, 4, 5, 6];

for(let i = 0;i < numeros.length;i = i + 1){
    console.log(numeros[i]);
}