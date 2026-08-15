const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'}
];

const caixa = window.document.querySelector('#container');
const novaDiv = document.createElement('div');

for(let i = 0; i < elementos.length; i = i + 1){
    let {tag, texto} = elementos[i];
    let tagCriada= document.createElement(tag);
    tagCriada.innerText = texto;
    novaDiv.appendChild(tagCriada);
}

caixa.appendChild(novaDiv);

