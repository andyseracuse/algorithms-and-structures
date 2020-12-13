function substringSearch(string, term) {
  var count = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < string.length; j++) {
      if (term[j] !== string[i + j]) {
        break
      }
      if (j === string.length - 1) {
        count++
      }
    }
  }
}