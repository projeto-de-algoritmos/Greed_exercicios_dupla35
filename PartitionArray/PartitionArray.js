/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
class FilaPrioridade {
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
    if (parentIndex >= 0 && this.heap[index][0] < this.heap[parentIndex][0]) {
      [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
      this.heapifyUp(parentIndex);
    }
  }

  heapifyDown(index) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let smallestIndex = index;

    if (leftChildIndex < this.heap.length && this.heap[leftChildIndex][0] < this.heap[smallestIndex][0]) {
      smallestIndex = leftChildIndex;
    }

    if (rightChildIndex < this.heap.length && this.heap[rightChildIndex][0] < this.heap[smallestIndex][0]) {
      smallestIndex = rightChildIndex;
    }

    if (smallestIndex !== index) {
      [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
      this.heapifyDown(smallestIndex);
    }
  }
}

function partitionArray(nums, k) {
  nums.sort((a, b) => a - b); 

  let cont = 0;
  let valorMinimo = nums[0];
  let valorMaximo = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - valorMinimo <= k) {
  
      valorMaximo = Math.max(valorMaximo, nums[i]);
    } else {
    
      cont++;
      valorMinimo = nums[i];
      valorMaximo = nums[i];
    }
  }

  
  cont++;

  return cont;
}