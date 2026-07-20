function meuEscopo(){
    const form = window.document.querySelector('#form');
    const resultado = window.document.querySelector('#resultado');

    const pessoas = [];

    function recebeEventoForm(evento){
        evento.preventDefault();
        const nome = form.querySelector('#nome');
        const sobrenome = form.querySelector('.sobrenome');
        const idade = form.querySelector('#idade');


        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            idade: idade.value
        })

        console.log(pessoas);
        resultado.innerHTML += `<p>Nome: ${nome.value} sobrenome: ${sobrenome.value} idade: ${idade.value}</p> `
    }
    
    form.addEventListener('submit', recebeEventoForm)
}
meuEscopo();