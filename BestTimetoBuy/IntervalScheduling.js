function intervalScheduling(precos, taxa) {
    let lucro = 0; 
    let acao = -precos[0]; 
  
    for (let i = 1; i < precos.length; i++) {
        if (precos[i] - taxa > acao) {
            lucro += precos[i] - taxa - acao; 
            acao = precos[i] - taxa; 
          } else if (precos[i] + taxa < acao) {
            acao = precos[i] - taxa; 
          }
        }
  
    return lucro;
  }
  
//TESTES
  const precos = [1,3,7,5,10,3];
  const taxa = 3;
  
  const lucroMaximo = intervalScheduling(precos, taxa);
  console.log(lucroMaximo);
  
  

  