const form = window.document.querySelector('#meuFormulario');
const res = window.document.querySelector('.resultado');
const situacao = window.document.querySelector('.resposta')

form.addEventListener('submit', function(event){
    event.preventDefault();
const pt = Number(window.document.querySelector('#n1').value);
const mt = Number(window.document.querySelector('#n2').value);
const ht = Number(window.document.querySelector('#n3').value);
const go = Number(window.document.querySelector('#n4').value);

const notas = (pt + mt + ht + go);
const media = notas / 4;
    if(media >= 7){
        res.innerHTML = media;
        situacao.innerHTML = 'Aprovado';
        situacao.style.color = 'green';
    }else{
        res.innerHTML = media;
        situacao.innerHTML = 'Reprovado';
        situacao.style.color = 'red';
    }
})
