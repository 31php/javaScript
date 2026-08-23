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
//imprimindo de 1 á 10
// for(let i = 0;i <= 10;i = i + 1){
//     console.log(`numero: ${i}`);
// }
// exibindo números pares
// const numeros = [1,2,3,4,5,6,7,8,9,10];
// for(let i = 0;i < numeros.length;i++){
//     if(numeros[i] % 2 === 0){
//         console.log(numeros[i]);
//     }
// }
// Tabuada
// for(let i = 0;i <= 10;i = i + 1){
//     let multi = 2 * i;
//     console.log(`2 x ${i} = ${multi}`);
// }
// const precos = [10.00, 20.00, 35.95, 2.55, 4.55, 1.50];
// let valorTotal = 0;

// for(let i = 0;i < precos.length;i++){
//     valorTotal = valorTotal + precos[i];
// }
// console.log(`o valor total da compra foi: R$${valorTotal.toFixed(2)}`);
// filtrando nomes
const nomes = ['maria', 'mariana', 'maristela', 'alice', 'dulcineia', 'maria clara'];

let contador = 0;
for(let i = 0;i < nomes.length;i++){
    if(nomes[i].startsWith('m')){
        contador++   
        console.log(nomes[i]);    
    }
}
console.log(`Os nomes que começam com 'm' totalizados são: ${contador}`);