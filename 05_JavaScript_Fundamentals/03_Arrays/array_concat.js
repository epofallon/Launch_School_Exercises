function concat(array1, ...theArgs) {
  let combinedArr = array1.slice();
  
  for (let argsIdx = 0; argsIdx < theArgs.length; argsIdx += 1) {
    let secondArg = theArgs[argsIdx];
    
    if (Array.isArray(secondArg)) {
      for (let idx = 0; idx < secondArg.length; idx += 1) {
        combinedArr.push(secondArg[idx]);
      }
    } else {
      combinedArr.push(secondArg);
    }
  }
  
  
  return combinedArr;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]