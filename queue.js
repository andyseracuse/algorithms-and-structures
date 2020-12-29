class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node;
    if(!this.size) {
      this.first = newNode;
      this.last = newNode
    }  else {
      this.last.next = newNode
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue(val) {
    if (!this.size) {
      return null
    }
    const temp = this.first.next;
    this.first.next = null
    this.first = temp
    --this.size
    return temp.val
  }
}