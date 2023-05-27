function intervalScheduling(precos, taxa) {
    let compra = precos[0];
    let lucro = 0; 
  
    for (let i = 1; i < precos.length; i++) {
      if (precos[i] < compra) {

        compra = precos[i];
      } else if (precos[i] > compra + taxa) {
  
        lucro += precos[i] - compra - taxa;
        compra = precos[i] - taxa;
      }
    }
  
    return lucro;
  }
  
//TESTES
  const precos = [1,3,7,5,10,3];
  const taxa = 3;
  
  const lucroMaximo = intervalScheduling(precos, taxa);
  console.log(lucroMaximo);
  
  

  