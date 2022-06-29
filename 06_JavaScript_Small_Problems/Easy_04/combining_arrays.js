/*
- input: two arrays
- output: a single array
  - the union of the values from the two input arrays
- requirements:
  - no duplicate values in the returned array
- algorithms:
  - initialize a result variable to an empty array
  - loop through both arrays
    - if an element doesn't exist 
      - add it to the result array
*/

function union(arr1, arr2) {
  let arrs = [arr1, arr2];
  let unionArr = [];
  
  for (let arrIdx = 0; arrIdx < arrs.length; arrIdx += 1) {
    let arr = arrs[arrIdx];
    for (let idx = 0; idx < arr.length; idx += 1) {
      if (unionArr.indexOf(arr[idx]) === -1) {
        unionArr.push(arr[idx]);
      }
    }
  }
  
  return unionArr;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]