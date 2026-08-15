// Iserindo tags html via javaScript
const cabeca = document.createElement('header');
document.body.appendChild(cabeca);

const titulo = document.createElement('h1');
titulo.textContent = 'Título do documento';
titulo.id = 'titulo';

cabeca.appendChild(titulo);

const corpo = document.createElement('main');
document.body.appendChild(corpo);

const paragrafo = document.createElement('p');
paragrafo.textContent = ' ';
paragrafo.classList.add('ponto')

corpo.appendChild(paragrafo);

function horario(){
    const hora = new Date();
    const horaAtual = hora.toLocaleString('pt-br');
    const pt = window.document.querySelector('.ponto');

    pt.innerHTML = `${horaAtual}`;

}
horario();