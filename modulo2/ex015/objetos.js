// objetos

// const jogoPersonagem = {
//     nome: 'phillip',
//     classe: 'gerreiro',
//     nivel: 9,
//     vida: 20,

// }
// jogoPersonagem.nivel = 16;
// jogoPersonagem.mana = 50;
// console.log(`o personagem ${jogoPersonagem.nome} é um classe ${jogoPersonagem.classe} de nivel ${jogoPersonagem.nivel} com vida ${jogoPersonagem.vida} e mana ${jogoPersonagem.mana}`);

// const cachorro = {
//     nome: 'rex',
//     raca: 'labrador',  
    
//     latir:function(){
//     return `Au au, eu sou o ${this.nome}`
//     }
// }
// console.log(cachorro.latir());
//  const contaBancaria = {
//     titular: 'Phillip',
//     saldo: 100,

//     depositar(valor){
//         this.saldo += valor;
//     }
//  }
//  console.log(`Sr. ${contaBancaria.titular}, seu saldo é: R$${contaBancaria.saldo}`);
//  contaBancaria.depositar(50);
//  console.log(`Sr. ${contaBancaria.titular}, seu novo saldo é: R$${contaBancaria.saldo}`);
  
// function criarProdutos(nome, preco){
//     return { nome, preco}
// }
// const produto1 = criarProdutos('sofá', 400);
// const produto2 = criarProdutos('tablet', 1500);
// console.log(produto1);
// console.log(produto2);

const usuario1 = {
    nome: 'lucas',
    logado: false
}
const usuario2 = {
    nome: 'helena', 
    logado: true
}
function verifcarAcesso(usuario){
    if(usuario.logado){
        return`bem-vindo de volta, ${usuario.nome}`;
    }
    else{
        return "acesso negado, usuário deslogado"
    }
}
console.log(verifcarAcesso(usuario1));
console.log(verifcarAcesso(usuario2));