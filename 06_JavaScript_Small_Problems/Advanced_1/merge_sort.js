/*
- notes:
  - 'merge sort' is a recursive sorting algorithm
    - breaks down an array's elements into nested subarrays
      [9, 5, 7, 1]
      [[9, 5], [7, 1]]
      [[[9], [5]], [[7], [1]]]
    - then combines those those nested subarrays back together in sorted order
      [[[9], [5]], [[7], [1]]]
      [[5, 9], [1, 7]]
      [1, 5, 7, 9]
- input: an unsorted array
- output: a new array with elements in sorted order
- requirements:
  - every element of the array will be the same data type (either all numbers or all strings)
  - split an array into two sub arrays
  - if those sub arrays are bigger than length 1 split them into a subarray
  - halving arrays: arr.slice(0, Math.floor(arr.length / 2)) & arr.slice(Math.floor(arr.length / 2))
  - if an array's length is 1 return that array
- data structure:
  - arrays since that's the input and what we are sorting
- algorithm:
  - split an array into two halves
  - if an array's length is larger than 1
    - call the function on that array and reassign it to the result
  - return merge of the two halves
*/

function mergeSort(arr) {
  let arr1 = arr.slice(0, Math.floor(arr.length / 2));
  let arr2 = arr.slice(Math.floor(arr.length / 2));
  
  if (arr1.length > 1) {
    arr1 = mergeSort(arr1);
  }
  if (arr2.length > 1) {
    arr2 = mergeSort(arr2);
  }

  return merge(arr1, arr2);
}

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

console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]