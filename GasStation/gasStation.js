/**
 * @param {number[]} gas
 * @param {number[]} custo
 * @return {number}
 */
var canCompleteCircuit = function(gas, custo) {
    const n = gas.length;
    let totalGas = 0;
    let atualGas = 0;
    let inicio = 0;
    
    for (let i = 0; i < n; i++) {
      totalGas += gas[i] - custo[i];
      atualGas += gas[i] - custo[i];
      
      if (atualGas < 0) {
        inicio = i + 1;
        atualGas = 0;
      }
    }

    return totalGas >= 0 ? inicio : -1;
  };