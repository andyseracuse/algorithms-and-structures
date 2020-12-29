class Node {
  constructor(val) {
    this.val = val;
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null; 
    this.tail = null;
    this.length = 0
  }

  push(val) {
    const node = new Node(val)
    if(this.head === null) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node;
    }
    this.length++
    return this
  }

  pop() {

    if(!this.length) {
      return undefined
    }
    let out = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = this.tail.prev
      this.tail.next = null
    }
    this.length--
    return out
  }

  shift() {
    if(!this.length) {
      return undefined
    }
    const out = this.head
    this.head = this.head.next
    if (this.length === 1) {
      this.tail = null
    }
    this.head.prev = null
    out.next = null
    this.length--
    return out;
  }
  unshift(val) {
    let newNode = this.val
    if(!this.length) {
      this.tail= newNode
    } else {
      newNode.next = this.head
      this.head.prev = newNode
    }
    this.head = newNode
    this.length++
    return this
  }

  get(index) {
    if (index < 0 || index >= this.length) return null
    if(length - index < index) {
      let counter = 0;
      while (counter !== index) {
        let current = this.head
        current = current.next
        counter++
      }
      return current
    } else {
      let counter = this.length - 1
      while (counter !== index) {
        let current = this.tail
        current = current.prev
        counter--
      }
      return current
    }
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
      return this.push(val)
    }
    if (index === 0) {
      return this.unshift(val)
    } else {
      const newNode = new Node(val);
      let node = this.get(index - 1);
      newNode.next = node.next
      newNode.next.prev = newNode
      node.next = newNode
      newNode.prev = node
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
      return this.pop()
    }
    if (index === 0) {
      return this.shift()
    } else {
      let node = this.get(index)
      let beforeNode = node.prev
      let afterNode = node.next
      
      beforeNode.next = afterNode
      afterNode.prev = beforeNode

      node.next = null
      node.prev = null
      this.length--
      return node
    }
  }
  reverse() {
    let node = this.head;
    this.head = this.tail
    this.tail = node
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next
      node.prev = next
      node.next = prev
      prev = node
      node = next
    }
    return this
  }
}