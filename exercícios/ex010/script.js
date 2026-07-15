const nome = window.prompt('Seu nome');
const sobrenome = window.prompt('Seu Sobrenome');

const numero1 = Number(window.prompt('Insira um número'));
const numero2 = Number(window.prompt('Insira outro número'));

const res = window.document.getElementById('resultado');

const soma = numero1 + numero2;
const sub = numero1 - numero2;
const mult = numero1 * numero2;
const divisão = numero1 / numero2;

res.innerHTML += `Olá, ${nome} ${sobrenome}. Seus números são: ${numero1} e ${numero2}<br>`;
res.innerHTML += `a soma entre ${numero1} e ${numero2} é: ${soma.toFixed(2)}<br>`;
res.innerHTML += `a subtração entre ${numero1} e ${numero2} é: ${sub.toFixed(2)}<br>`;
res.innerHTML += `a multiplicação entre ${numero1} e ${numero2} é: ${mult.toFixed(2)}
<br>`;
res.innerHTML += `adivisão entre ${numero1} e ${numero2} é: ${divisão.toFixed(2)}<br>`