function binarySearch(arr, val) {
  var start = 0;
  var end = arr.length - 1
  
  while (start <= end) {
    var middle = Math.ceil((start + end) / 2)
    if (val < arr[middle]) {
      end = middle - 1 
    }
    if (val > arr[middle]) {
      start = middle + 1
    }
    if (val === arr[middle]) {
      return middle
    }
  }
  return -1
}