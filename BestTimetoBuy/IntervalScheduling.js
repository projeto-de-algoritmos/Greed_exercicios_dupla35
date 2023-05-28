/**
 * @param {number[]} precos
 * @param {number} taxa
 * @return {number}
 */
var maxProfit = function(precos, taxa) {
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
  
  
  

  