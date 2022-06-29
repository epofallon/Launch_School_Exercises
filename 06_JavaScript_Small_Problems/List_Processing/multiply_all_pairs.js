/*
=== Understand the Problem ===
- input:
  - two arrays of numbers
- output:
  - a new array
    - the products of all combinations of number pairs
- explicit requirements:
  - sort the array in ascedning numerical order
- implicit requirements:
  - 
=== Examples / Test Cases ===
- 
=== Data Structures ===
- 
=== Algorithm ===
- declare a result array
- iterate through the first array
  - iterate through the second array
    - add the multiple to the result array
- return a sorted array
*/

function multiplyAllPairs(arr1, arr2) {
  let products = [];
  arr1.forEach(num1 => {
    arr2.forEach(num2 => {
      products.push(num1 * num2);
    });
  });
  
  return products.sort((num1, num2) => num1 - num2);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]