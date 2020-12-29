class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null
  }

  insert(val) {
    const newNode = new Node(val)
    if (!this.root) {
      this.root = newNode
      return this
    }
    const helper = (current) => {
      if(val > current.val) {
        if(!current.right) {
          current.right = newNode
          return
        }
        helper(current.right)
      } else if (val < current.val) {
        if(!current.left) {
          current.left = newNode
          return
        }
        helper(current.left)
      } else {
        return undefined
      }
    }
    helper(this.root)
    return this
  }
  find(val) {
    const helper = (node) => {
      if (!node) {
        return null
      } else if (node.val === val) {
        return val
      } else {
        if (val < node.val) {
          return helper(node.left)
        } else {
          return helper(node.right)
        }
      }
    }
    return helper(this.root)
  }
  BFS() {
    let node = this.root
    let data = [];
    let queue = [];
    queue.push(node)
    while(queue.length) {
      node = queue.shift()
      data.push(node)
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
    }
    return data
  }
  DFSPre() {
    let data = [];

    const helper = (node) => {
      data.push(node)
      if(node.left) helper(node.left)
      if(node.right) helper(node.right) 
    }
    helper(this.root)
    return data
  }
  DFSPost() {
    let data = [];

    const helper = (node) => {
      if(node.left) helper(node.left)
      if(node.right) helper(node.right) 
      data.push(node)
    }
    helper(this.root)
    return data
  }
}