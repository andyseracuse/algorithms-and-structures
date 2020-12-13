const swap = function(arr, i1, i2) {
  var temp = arr[i1]
  arr[i1] = arr[i2]
  arr[i2] = temp
}

const selectionSort = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIn = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIn]) {
        minIn = j
      }
    }
    swap(arr, i, minIn)
  }
  return arr
}