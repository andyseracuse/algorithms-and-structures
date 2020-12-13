const swap = function(arr, i1, i2) {
  var temp = arr[i1]
  arr[i1] = arr[i2]
  arr[i2] = temp
}

const bubbleSort = function(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        swap(arr, j, j + 1)
        noSwaps = false
      }
    }
    if (noSwaps) {
      break
    }
  }
  return arr
}

console.log(bubbleSort([15,2,3,1,7]))