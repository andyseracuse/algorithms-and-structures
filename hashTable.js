class hashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size)
  }

  hash (key) {
    let total = 0
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set (key, value) {
    const hash = this.hash(key);
    if (!this.keyMap[hash]) {
      this.keyMap[hash] = []
      this.keyMap[hash].push([key, value])
    } else {
      for (let i = 0; i < element.length; i++){
        if (this.keyMap[hash][i][0] === key) {
          this.key[hash][i][1] = value
          return
        }
      }
      this.keyMap[hash].push([key, value])
    }
  }
  get (key) {
    const hash = this.hash(key);
    if(this.keyMap[hash]){
      for (let i = 0; i < this.keyMap[hash].length; i++) {
        if (this.keyMap[i][0] === key) {
          return this.keyMap[i][1]
        }
      }
    }
    return undefined
  }

  keys() {
    let out = []
    for (let i = 0; i < this.keyMap.length; i++) {
      if(this.keyMap[i]){
        for (let j = 0; j < this.keymap[i].length; j++) {
          out.push(this.keymap[i][j][0])
        }
      }
    }
    return out
  }
}