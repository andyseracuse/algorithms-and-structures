class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(v) {
    if (!this.adjacencyList[v]) {
      this.adjacencyList[v] = []
    }
  }
  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({node:v2, weight})
    this.adjacencyList[v2].push({node:v1, weight})
  }
  da(start, end) {
    const distances = {};
    const nodes = new PriorityQueue();
    const previous = {};
    let smallest;
    for(let key in this.adjacencyList) {
      if(key === start) {
        distances[key] = 0
        nodes.enqueue(key, 0)
      } else {
        distances[key] = Infinity;
        nodes.enqueue(key, Infinity)
      }
      previous[key] = null
    }
    while(nodes.values.length) {
      smallest = nodes.dequeue().val
      if (smallest === end) {
        //we are done build path to start
      }
      if (smallest || distances[smallest]){
        for(let neighborIndex in this.adjacencyList[smallest]) {
          let neighbor = this.adjacencyList[smallest][neighborIndex]
          let candidate = distances[smallest] + neighbor.weight
          if(candidate < distances[nextNode.node]) {
            distances[neighbor.node] = candidate;
            preivious[neighbor.node] = smallest
          }
        }
      }
      for(let i = 0; i < this.adjacencyList[current.val].length; i++) {
        let 
        while()
      }
    }
    const visited = {};
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({val, priority})
    this.sort();
  }
  dequeue() {
    return this.values.shift()
  }
  sort() {
    this.values.sort((a,b) => a.priority - b.priority);
  }
}