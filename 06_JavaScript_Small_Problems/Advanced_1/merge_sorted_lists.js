/*
- notes:
- inputs:
  - two sorted arrays as arguments
- outputs:
  - a new array that contains all the elements from both input arrays in sorted order
- requirements:
  - cannot sort the result array, rather you must build the array one element at a time in proper order
  - don't mutate either input array
  - if an array is ommitted set it to an empty array
  - data type will always be primitive
  - data types will always be the same type for every element
  - duplicate values are included in the result array
- edge cases:
  - an empty array is passed in -> returns the elements from the non-empty array
  - will the arrays always have 1 data type?
  - will the arrays always have the same data type?
  - will the data type always be primitive, or always numbers?
  - will an array argument ever be omittied?
  - duplicate values
- data structure:
  - input:
    - two arrays
  - output: an array
  - useful to keep arrays to process one element at a time in loops
- algorithm:
  - set empty arrays as default parameters
  - declare a new, empty result array
  - declare an array1 index as 0
  - declare an array2 index as 0
  - loop until the result array's length is equal to the length of both input arrays
    - if arr2 index is equal to arr2's length || if the arr1 element is less than the arr2 element
      - add the arr1 element to the array
      - increment the arr1 index
    - if arr1 index is equal to arr1's length || if the arr2 element is less than the arr1 element
      - add the arr2 element to the array
      - increment the arr2 index
    - if the elements are equal
      - add both to the array
      - increment both indexes
  - return the result array
*/
// 1 & 2 -> 1
// 5 & 2 -> 2
// 5 & 6 -> 5
// 9 & 6 -> 6
// 9 & 8 -> 8
// 9 & undefined
function merge(arr1 = [], arr2 = []) {
  let result = [];
  let idx1 = 0;
  let idx2 = 0;
  while (result.length < (arr1.length + arr2.length)) {
    if (idx2 === arr2.length || arr1[idx1] < arr2[idx2]) {
      result.push(arr1[idx1]);
      idx1 += 1;
    } else if (idx1 === arr1.length || arr2[idx2] < arr1[idx1]) {
      result.push(arr2[idx2]);
      idx2 += 1;
    } else {
      result.push(arr1[idx1], arr2[idx2]);
      idx1 += 1;
      idx2 += 1;
    }
  }
  return result;
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]
// string data type
console.log(merge(['a', 'd', 'z'], ['b', 'g', 't'])); // ['a', 'b', 'd', 'g', 't', 'z']
// array omitted
console.log(merge([1, 5, 9])); // [1, 5, 9]