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


  return totalTime;
};