//atribuição via desestruturação

//índices        0  1  2  3  4  5  6  7  8
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//console.log(`número: ${numeros[8]}`);// acessando os elementos do array

/*const [numero1, numero2, numero3, ...resto] = numeros;
console.log(numeros);
console.log(numero1, numero2, numero3);
console.log(resto)*/

const cores = ['azul', 'amarelo', 'preto', 'branco', 'rosa', 'cinza', 'vermelho'];
const [cor1, cor2, cor3,...resto] = cores;
console.log(`todas as cores: ${cores}`);
console.log(`cores separadas: ${cor1}, ${cor2}, ${cor3}`);
console.log(`cores que sobraram: ${resto}`);
