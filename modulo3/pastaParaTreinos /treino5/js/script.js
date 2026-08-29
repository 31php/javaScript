const novaDiv = window.document.createElement('div');
novaDiv.id = 'resposta';
document.body.appendChild(novaDiv);

let somaNotas = 0;
const res = document.querySelector('#resposta');

for(let i = 1;i <= 4;i++){
    const nota = Number(window.prompt(`insira a nota ${i}`));
    somaNotas += nota;
}
res.innerHTML += somaNotas;