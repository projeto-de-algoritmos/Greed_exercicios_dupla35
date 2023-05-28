/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
class PriorityQueue {
    constructor() {
      this.heap = [];
    }
  
    get size() {
      return this.heap.length;
    }
  
    enqueue(item) {
      this.heap.push(item);
      this.heapifyUp(this.heap.length - 1);
    }
  
    dequeue() {
      if (this.heap.length === 0) {
        return null;
      }
  
      if (this.heap.length === 1) {
        return this.heap.pop();
      }
  
      const root = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown(0);
      return root;
    }
  
    heapifyUp(index) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (parentIndex >= 0 && this.heap[index] < this.heap[parentIndex]) {
        [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
        this.heapifyUp(parentIndex);
      }
    }
  
    heapifyDown(index) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let smallestIndex = index;
  
      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
        smallestIndex = leftChildIndex;
      }
  
      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
        smallestIndex = rightChildIndex;
      }
  
      if (smallestIndex !== index) {
        [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
        this.heapifyDown(smallestIndex);
      }
    }
  }
  
  function minSubsequences(nums, k) {
    nums.sort((a, b) => a - b); // Ordena o array nums em ordem crescente
    const groups = new PriorityQueue();
    groups.enqueue([nums[0], 0]);
  
    for (let i = 1; i < nums.length; i++) {
      const [minValue, groupId] = groups.dequeue();
  
      if (nums[i] - minValue <= k) {
        groups.enqueue([minValue, groupId]);
      } else {
        groups.enqueue([nums[i], groups.size]);
      }
    }
  
    return groups.size;
  }
  
  // Exemplo de uso
  const nums = [3,6,1,2,5];
  const k = 2;
  
  const minSubsequencesCount = minSubsequences(nums, k);
  console.log(minSubsequencesCount);
  