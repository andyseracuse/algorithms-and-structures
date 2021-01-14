class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(value) {
    if(!this.adjacencyList[value]) this.adjacencyList[value] = []
  }

  addEdge(v1, v2) {
    if(this.adjacencyList[v1] === undefined || this.adjacencyList[v2] === undefined) {
      return undefined
    }
    this.adjacencyList[v1].push(v2)
    this.adjacencyList[v2].push(v1)
  }

  removeEdge(v1, v2) {
    if(this.adjacencyList[v1] === undefined || this.adjacencyList[v2] === undefined) {
      return undefined
    }
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2)
    this.adjacencyList[v1] = this.adjacencyList[v2].filter(v => v !== v1)
  }

  removeVertex(v) {
    if(this.adjacencyList[v] === undefined) {
      return undefined
    }
    for(vertex in this.adjacencyList[v]) {
      this.removeVertex(v, vertex)
    }
    delete this.adjacencyList[v]
  }

  DFSr(vertex) {
    let results =[]
    let visited = {}
    const helper = (vertex) => {
      if(!vertex) {
        return null
      }
      results.push(vertex)
      visited[vertex] = true;
      adjacencyList[vertex].forEach(neighbor => {
          if(!visited[neighbor]) {
            return helper(neighbor)
          }
      })
    }
    helper(vertex)
    return results
  }

  DFSi(vertex) {
    const stack = [vertex];
    const visited = {vertex: true};
    const out = [];
    let next;

    while(stack.length) {
      next = stack.pop()
      out.push(next)
      this.adjacencyList[next].forEach(neighbor => {
        if(!visited[neighbor]){
          visited[neighbor] = true;
          stack.push(neighbor)
        }
      })
    }
    return out;
  }

  BFS(start){
    const queue = [start];
    const out = [];
    const visited = {start: true};
    while(queue.length) {
      let next = queue.shift()
      out.push(next)
      this.adjacencyList[next].forEach(neighbor => {
        if(!visited[neighbor]){
          visited[neighbor] = true;
          queue.push(neighbor)
        }
      })
    }
    return out 
  }
}