// userindo tags html via javaScript
const titulo = document.createElement('h1');
titulo.textContent = 'Título de um documento';
titulo.id = 'titulo';
document.body.appendChild(titulo);

const paragrafo = document.createElement('p');
paragrafo.textContent = 'Um parágarfo para o texto criado via Js';
paragrafo.classList.add('paragrafo');
document.body.appendChild(paragrafo);

const novaDiv = document.createElement('div');
novaDiv.textContent = 'este elemento foi criado via javaScript';

document.body.appendChild(novaDiv);