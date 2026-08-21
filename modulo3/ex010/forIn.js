const carros = {
    marca: 'ford',
    cor: 'preto',
    modelo: 'sedan',
    ano: 2013
};

for(let chave in carros){
    console.log(chave, carros[chave]);
    
}