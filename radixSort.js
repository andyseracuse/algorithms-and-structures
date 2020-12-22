function getDigit(number, pow) {
  return Math.floor(Math.abs(number / 10 ** pow)) % 10
}

function highestPlace(number) {
  return number.toString().length
}

function radixSort(arr) {
  debugger
  let maxDigits = 0
  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(highestPlace(arr[i]), maxDigits);
  }
  for (let i = 0; i < maxDigits; i++) {
    const buckets = [[],[],[],[],[],[],[],[],[],[]]
    for(let j = 0; j < arr.length; j++) {
      buckets[getDigit(arr[j], i)].push(arr[j])
    }
    arr = []
    for (let j = 0; j < buckets.length; j++) {
      arr.push(...buckets[j])
    }
  }
  return arr
}