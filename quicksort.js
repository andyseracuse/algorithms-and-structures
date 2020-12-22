const quicksort = function(arr) {
  if (arr.length <= 1) {
    return arr
  }
  const pivot = arr[0]
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > pivot) { 
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }
  return [...quicksort(left), pivot, ...quicksort(right)]
}