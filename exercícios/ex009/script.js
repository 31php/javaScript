const nome = window.prompt('Digite seu nome');
const nomeTitulo = window.document.getElementById('nome-titulo');
const texto = window.document.getElementById('texto');

nomeTitulo.innerHTML += nome;
texto.innerHTML += `<p>Seu nome em maiúsculo é: ${nome.toUpperCase()}</P>`;
texto.innerHTML += `<p>Seu nome em minúsculo é: ${nome.toLowerCase()}</p>`;