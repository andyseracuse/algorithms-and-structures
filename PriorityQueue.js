class PriorityQueue {
  constructor() {
    this.values = [];
  }

  insert(val, priority) {
    let newNode = new Node(val, priority)
    this.values.push(val)
    let index = this.values.length - 1;
    while(index > 0) {
      debugger
      let parentIndex = Math.floor((index - 1)/2)
      if (this.values[parentIndex].priority >= val) {
        return this
      }
      let temp = this.values[parentIndex]
      this.values[parentIndex] = val
      this.values[index] = temp
      index = parentIndex
    }
  }

  sinkDown() {
    let index = 0
    const length = this.values.length
    const element = this.values[0]
    while(true) {
      let leftChildIndex = 2 * index + 1
      let rightChildIndex = 2 * index + 2
      let leftChild,rightChildIndex
      let swap = null
      if(leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if(leftChild > element) {
          swap = leftChildIndex
        }
        if(rightChildIndex < length) {
          rightChild = this.values[rightChildIndex];
          if((swap === null && rightChild > element) ||
             (swap !== null && rightChild > leftChild)
          ) {
            swap = rightChildIdx
          }
        }
      }
      if(swap === null) break
      this.values[index] = this.values[swap]
      this.values[swap] = element
      index = swap
    }
  }
  
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end
    this.sinkDown()
    return max
  }
}

class Node {
  constructor(val, priority) {
    this.val = val,
    this.priority = priority
  }
}