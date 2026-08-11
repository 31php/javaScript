// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const [num1, num2, num3,...resto] = numeros;
// console.log(numeros);
// console.log(num1, num2, num3);
// console.log(resto);

// const vogais = ['a', 'e', 'i', 'o', 'u'];
// const [letra1, letra2, letra3,...resto] = vogais;
// console.log(vogais);
// console.log(letra1, letra2, letra3);
// console.log(resto);

const cores = ['verde', 'amarelo', 'azul', 'branco', 'rosa', 'preto', 'cinza','roxo'];

const [cor1, cor2, cor3, cor4, ,...resto] = cores;
console.log(cores);
console.log(cor1, cor2, cor3);
console.log(resto);
console.log(cores[4]);