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
      let node = this.get(index - 1);
      newNode.next = node.next
      node.next = newNode
    }
    this.length++
    return true
  }

  remove(index) {
    let out;
    if (index < 0 || index > this.length - 1) {
      return undefined
    }
    if (index === this.length - 1) {
      debugger
      
      out = this.pop()
      return out
    }
    if (index === 0) {
      out = this.shift().val
    } else {
      let node = this.get(index - 1)
      out = node.next
      node.next = node.next.next
    }
    this.length--
    return out
  }
  reverse() {
    let node = this.head;
    this.head = this.tail
    this.tail = node
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next
      node.next = prev
      prev = node
      node = next
    }
    return this
  }
}