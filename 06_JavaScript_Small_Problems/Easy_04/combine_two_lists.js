function interleave(arr1, arr2) {
  let resultArr = [];
  
  for (let idx = 0; idx < arr1.length; idx += 1) {
    resultArr.push(arr1[idx], arr2[idx]);
  }
  
  return resultArr;
}


console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]