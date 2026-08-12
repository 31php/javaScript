// userindo tags html via javaScript
const titulo = document.createElement('h1');
titulo.textContent = 'Título de um documento';
document.body.appendChild(titulo);

const paragrafo = document.createElement('p');
paragrafo.textContent = 'Um parágarfo para o texto criado via Js';

document.body.appendChild(paragrafo);


const novaDiv = document.createElement('div');
novaDiv.textContent = 'este elemento foi criado via javaScript';

document.body.appendChild(novaDiv);