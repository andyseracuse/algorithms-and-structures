class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val)
    if (!this.first) {
      this.first=newNode;
      this.last = newNode;
    } else {
      var temp = this.first
      this.first = newNode;
      this.first.next = temp
    }
    this.size++
  }
  pop() {
    if(!this.size) {
      return null
    }
    var temp = this.first;
    if(this.first === this.last) {
      this.last = null
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}

class Node {
  constructor(value) {
    this.value = value
    this.next = null;
  }
}