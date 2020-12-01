function countUniqueValues(arr){
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 0) {
    return 0
  }
  let low = 0;
  let count = 1
  
  for (let high = 0; high < arr.length; high++) {
    if (!(arr[high] === arr[low])) {
      count++
      low = high
    }
  }
  return count
}