class Node {
  constructor(val) {
    this.val = val;
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null; 
    this.tail = null;
    this.length = 0
  }

  push(val) {
    const node = new Node(val)
    if(this.head === null) {
      this.head = node
    } else {
      this.tail.next = node
    }
    this.tail = node;
    this.length++
  }

  pop() {
    if(!this.length) {
      return undefined
    }
    let pointer = this.head
    debugger
    while(pointer.next.next) {
      pointer = pointer.next
    }
    let out = this.tail.val
    pointer.next = null
    this.tail = pointer
    this.length--
    return out
  }

  shift() {
    if(!this.length) {
      return undefined
    }
    const out = this.head.val
    this.head = this.head.next
    this.length--
    return out;
  }
  unshift(val) {
    let newNode = this.val
    if(!this.length) {
      this.tail= newNode
    } else {
      newNode.next = this.head
    }
    this.head = newNode
    this.length++
    return this
  }

  get(index) {
    if (index < 0 || index >= this.length) return null
    let counter = 0;
    let current = this.head
    while (counter !== index) {
      current = current.next
      counter++
    }
    return current
  }
  
  set(index, value) {
    const node = this.get(index)
    if(node) {
      node.val = value
      return true
    }
    return false
  }
  insert(index, val) {
    let node;
    if (index < 0 || index > this.length) {
      return false
    }
    if (index === this.length) {
      this.push(val)
    }
    if (index === 0) {
      this.unshift(val)
    } else {
      const newNode = new Node(val);
      node = this.get(index - 1);
      newNode = node.next;
      node.next = newNode
    }
    this.length++
    return true
  }
}