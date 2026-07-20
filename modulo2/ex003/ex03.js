const nome = 'Phillip';
const sobreNome = 'Ferreira';
const idade = 40;
const peso = 88.10;
const altura = 1.75;

let anoNascimento = 2026 - idade;
let imc;
imc = peso / (altura * altura); 
/*console.log('me chamo', nome,'e tenho', idade,'anos de idade');
console.log('tenho',altura,'de altura e',peso,'quilos');
console.log('mue imc é:',imc);*/
console.log(`me chamo ${nome} tenho ${idade} anos e peso ${peso} quilos. nascido em ${anoNascimento} meu imc é: ${imc}`);