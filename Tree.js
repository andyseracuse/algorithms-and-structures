class Tree {
  constructor(val) {
    this.val = val;
    this.children = [];
  }

  addChild(val) {
    this.children.push(new Tree(val))
  }

  BFT() {
    let current = this;
    let queue = [];
    let data = [];
    queue.push(current);
    while (queue.length) {
      current = queue.shift()
      data.push(current.val)
      for (let i = 0; i < current.children.length; i++) {
        queue.push(current.children[i])
      }
    }
    return data
  }

  DFTPre() {
    let data = [];
    const helper = (node) => {
      data.push(node.val)
      for (let i = 0; i < this.children.length; i++) {
        helper(this.children[i])
      }
    }
    helper(this)
    return data
  }
  DFTPost() {
    let data = [];
    const helper = (node) => {
      for (let i = 0; i < this.children.length; i++) {
        helper(this.children[i])
      }
      data.push(node.val)
    }
    helper(this)
    return data
  }
}

