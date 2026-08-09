function horario(){
    const hora = new Date();
    const horarioAtual = hora.toLocaleString('pt-br');

    const txt = window.document.querySelector('.paragrafo2');
    txt.innerHTML = horarioAtual;

}
horario();