const buildObj = (string, obj) => {
  //loop through string
  for (char of string) {
    //  if the char is in obj
    if (char in obj) {
      //    increment
      obj[char]++
      //  else 
    }else{
      //    set char to 1
      obj[char] = 1
    }
  }
}

const validAnagram = (string1, string2) => {
  //init string1obj and string2 obj
  let obj1 = {};
  let obj2 = {}
  buildObj(string1, obj1)
  buildObj(string2, obj2)

  for (char in obj1) {
    if(!(obj2[char] === obj1[char])) {

      return false
    }
  }
  return true
}


console.log(validAnagram('doggo', 'godg'))