const numero = Number(window.prompt('Digite um numero '));
const numTitulo = window.document.getElementById('numero-titulo');
const texto = window.document.getElementsByClassName('texto')[0];

numTitulo.innerHTML = numero;   
texto.innerHTML = `<p>A raiz quadrada de ${numero} é: ${numero ** 0.5}</p>`; 
texto.innerHTML += `<p>${numero} é inteiro? ${Number.isInteger(numero)} </p>`;
texto.innerHTML += `<p>É NAN? ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para baixo é: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para cima é: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais é: ${numero.toFixed(2)}</p>`;