function intervalScheduling(precos, taxa) {
    let lucro = 0; 
    let acao = -precos[0]; 
  
    for (let i = 1; i < precos.length; i++) {
      if (precos[i] + taxa < acao) {
        lucro += acao - taxa; 
        acao = precos[i];
      } else if (precos[i] > acao) {
        acao = precos[i]; 
      }
    }
  
    if (acao > 0) {
      lucro += acao - taxa;
    }
  
    return lucro;
  }
  
//TESTES
  const precos = [1,3,7,5,10,3];
  const taxa = 3;
  
  const lucroMaximo = intervalScheduling(precos, taxa);
  console.log(lucroMaximo);
  
  

  