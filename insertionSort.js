function insertionSort (arr) {
  for (var i = 1; i < arr.lnegth; i++) {
    var currentVal = arr[i]
    for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j]
    }
    arr [j + 1] = currentVal
  }
}