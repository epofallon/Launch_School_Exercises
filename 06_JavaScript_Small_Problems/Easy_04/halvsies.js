/*
- input:
  - an array
- output:
  - an array with two elements, each of which is an array
  - the first element array will have the first half of the original array
  - the second element array will have the second half of the original array
- algorithm:
  - declare first and set it equal to slice from 0 upto half the array
  - declare second and set it equal to half the array to the end
*/

function halvsies(arr) {
  let splitIdx = Math.ceil(arr.length / 2)
  let first = arr.slice(0, splitIdx );
  let second = arr.slice(splitIdx);
  
  return [first, second];
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]