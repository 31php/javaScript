const elementos = [
    {tag: 'p', texto: 'frase1'},
    {tag: 'div', texto: 'frase2'},
    {tag: 'section', texto: 'frase3'},
    {tag: 'footer', texto: 'frase4'}
];

const cx = window.document.querySelector('#caixa');
const novaDiv = document.createElement('div');

for(let i = 0;i < elementos.length;i++ ){
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto;
    novaDiv.appendChild(tagCriada);
    console.log();
}

cx.appendChild(novaDiv);


