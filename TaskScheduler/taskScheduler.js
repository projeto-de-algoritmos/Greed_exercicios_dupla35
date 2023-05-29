/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {

  //Contando frequência  
  const taskFreq = new Array(26).fill(0);
  for (let task of tasks) {
    const index = task.charCodeAt(0) - 65; 
    taskFreq[index]++;
  }

  // Ordenando as tarefas em ordem decrescente de frequência
  taskFreq.sort((a, b) => b - a);

  // Encontrando o número máximo de tarefas com a mesma frequência máxima
  let maxFreq = taskFreq[0];

  // Calculando o número de tarefas que têm a mesma frequência máxima
  let maxCount = 1;
  for (let i = 1; i < taskFreq.length; i++) {
    if (taskFreq[i] === maxFreq) {
      maxCount++;
    } else {
      break;
    }
  }


  return totalTime;
};