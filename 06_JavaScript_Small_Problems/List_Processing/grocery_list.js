/*
=== Understand the Problem ===
- input:
  - a two-dimensional array
- output:
  - a one-dimensional array
- explicit requirements:
  - the returned array has the name of each item repeated for it's quantity
- implicit requirements:
  - 
=== Examples / Test Cases ===
- 
=== Data Structures ===
- 
=== Algorithm ===
- declare a new array
- iterate through the array
  - iterate the number of times equal to each fruit's quantity
    - add that fruit name to the array
- return the result array
*/

function buyFruit(fruits) {
  return fruits.flatMap(multiplyFruit);
}

function multiplyFruit([fruit, amount]) {
  return new Array(amount).fill(fruit);
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]