// exercícios básicos sobre função

// function cumprimentar(nome){
//     return (`olá ${nome}, seja bem-vindo ao mundo javaScript`)
// }
// console.log(cumprimentar('phillip'))
// console.log(cumprimentar('paula'));
// console.log(cumprimentar('Samira'));

//  function calcularIMC(peso, altura){
//     const conta = peso / (altura * altura);
//     return `seu peso é ${peso}, e sua altura é ${altura} entao seu IMC é ${conta.toFixed(2)}`;
//  }
//  console.log(calcularIMC(88, 1.75));

//  const conversorCelsiusParaFahrenhiet = (celsius) => celsius * 1.8 + 32

// console.log(conversorCelsiusParaFahrenhiet(40));

// const maiorNumero = (num1, num2, num3) => Math.max(num1, num2, num3);

// console.log(maiorNumero(10, 40, 35));
// console.log(maiorNumero(90, 26, 9.786));
// console.log(maiorNumero(2, 1.50, 3));

// const menorNumero = (num1, num2, num3) => Math.min(num1, num2, num3);

// console.log(menorNumero(1, 0.576, 3));

// function podeDirigir(idade){
//     if(idade < 18){
//         const anosQueFaltam = 18 -idade;
//         return `acesso negado: faltam ${anosQueFaltam} pra voce poder tirar a habilitação`;
//     }
//     else{
//         return `acesso autorizado: você já pode tirar a habilitação`;
//     }
// }
// console.log(podeDirigir(16));

// const verificadorDePar = (numero) => numero % 2 === 0  

// console.log(verificadorDePar(11));

// function aplicarDesconto(valorProduto, desconto){
    
//     const descontoPorcentagem = desconto / 100;
//     const valorDoDesconto = valorProduto * descontoPorcentagem;
//     const preçoFinal = valorProduto - valorDoDesconto;

//     return preçoFinal.toFixed(2);

// }console.log(aplicarDesconto(45, 7));

// const gerarEmail = (nome, sobrenome) => `${nome.toLowerCase()}.${sobrenome.toLowerCase()}@empresa.com.br`;

// console.log(gerarEmail('PHILLIP','FERREIRA'));

const dobro = (numero) => numero * 2;
console.log(dobro(5));

function calcularResultado(Numero){
    const resultadoDoDobro = dobro
}