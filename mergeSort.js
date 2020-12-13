const merge = function(arr1, arr2) {
  let out = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      out.push(arr1[i])
      i++
    }else{
      out.push(arr2[j])
      j++
    }
  }
  while(i < arr1.length) {
    out.push(arr1[i])
    i++
  }
  while(j < arr2.length) {
    out.push(arr2[j])
    j++
  }
  return out
}

const mergeSort = function(arr) {
  if (arr.length <= 1) {
    return arr
  }
  const mid = Math.floor(arr.length) /2
  const arr1 = arr.slice(0, mid)
  const arr2 = arr.slice(mid)
  
  merge(mergeSort(arr1), mergeSort(arr2))
}