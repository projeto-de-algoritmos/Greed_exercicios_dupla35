/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function(nums, k) {
    nums.sort((a, b) => a - b);
const grupos = []; 


grupos.push([nums[0]]);

for (let i = 1; i < nums.length; i++) {
  let adicionaGrupo = false;


  for (let j = 0; j < grupos.length; j++) {
    if (nums[i] - grupos[j][0] <= k) {
      grupos[j].push(nums[i]);
      adicionaGrupo = true;
      break;
    }
  }


  if (!adicionaGrupo) {
    grupos.push([nums[i]]);
  }
}

return grupos.length;
};
  
  // TESTE
  const nums = [1, 2, 3, 4, 5];
  const k = 2;
  
  const minSubsequencesCount = minSubsequences(nums, k);
  console.log(minSubsequencesCount);
  