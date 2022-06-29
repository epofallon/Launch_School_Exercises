/*
- input: an array of numbers
- output: an array of numbers
  - a running total of the numbers in the input array.
- algorithm:
  - set a total to 0
  - set an empty results array
  - iterate through the input array
    - set total to total + arr[idx]
    - push total onto the results array
  - return the results array

*/

function runningTotal(arr) {
  let currentTotal = 0;
  
  return arr.map((num) => currentTotal += num);
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []