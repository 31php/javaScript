// Operadores lógicos

/*
&& -> and -> ê = todas as expressões precisam ser verdadeiras para retornar true
|| -> or -> ou == basta um das expressões serem verdadeira para retornar true
! -> not -> não = negação
*/
// const expressaoAnd = true && true && false;
// console.log(expressaoAnd); 

// const expressaoOr = true || true || false;
// console.log(expressaoOr);

// function verificarAcessoVip(altura, idade, temPasseVip){

//     if(altura >= 1.40 && idade >= 12){

//         return'Acesso permitido! divirta-se!'

//     }else if(altura >= 1.30 && idade >=16 && temPasseVip === true){

//         return'Acesso permitido! divirta-se!';

//     }else{

//         return'Acesso negado por motivo de segurança';
//     }
// }
// console.log(verificarAcessoVip(1.45, 13, false));
// console.log(verificarAcessoVip(1.35, 17, true));
// console.log(verificarAcessoVip(1.35, 15, true));
// console.log(verificarAcessoVip(1.50, 10, false));

// function verificarAcessoVip(altura, idade, temPasseVip){
    
//     if((altura >= 1.40 && idade >= 12) || (altura >= 1.30 && idade >= 16 && temPasseVip === true)){

//         return 'Acesso permitido, divirta-se!';
//     }else{
//         return 'Acesso negado por motivo de segurança';
//     }
// };
// console.log(verificarAcessoVip(1.45, 13, false));
// console.log(verificarAcessoVip(1.50, 10, false));

// function calcularFrete(valorCompra, temCupomFrete){
    
//     if(valorCompra >= 200 || temCupomFrete === true){
//         return 'frete Grátis'
//     }else{
//         return 'cobrar frete padrão';
//     }
// }
// console.log(calcularFrete(150, true));
// console.log(calcularFrete(150, false));

// function loginSeguro(nome, senha, dispositivoReconhecido){

//     if(nome === 'phillip' && senha === 1324 && dispositivoReconhecido === true){

//         return `seja bem-vindo ${nome}`

//     }
//     else if(nome === 'phillip' && senha === 1324 && dispositivoReconhecido === false){

//         return 'Bloqueado: verificação em duas etapas necessária'
//     }
//     else{
//         return `login/senha inválidos`;
//     }
// }
// console.log(loginSeguro('phillip', 1324, true));
// console.log(loginSeguro('phillip', 1324, false));
// console.log(loginSeguro('luana', 5768, false));

function radarDeTransito(velocidade, veiculoEmergencia){

    if(veiculoEmergencia === true){

        return 'veículo de emergencia isento';

    }
    
    if(velocidade <= 80){

        return 'Sem infração';

    }else if(velocidade > 80 && velocidade <= 100){

        return 'multa leve'

    }else{
        return 'multa grave com retenção da cnh'
    }
}
console.log(radarDeTransito(75, false));
console.log(radarDeTransito(95, true));
console.log(radarDeTransito(110, false));
console.log(radarDeTransito(125, true));