/*
Given two arrays, return whether the two arrays are opposites of each other. That means both arrays are comprised only from elements a and b and the occurrences of these elements are swapped between the two arrays.
EXAMPLES / TEST CASES
console.log(isAntiArray(["1", "0", "0", "1"], ["0", "1", "1", "0"]) // true

console.log(isAntiArray(["apples", "bananas", "bananas"], ["bananas", "apples", "apples"]) // true

console.log(isAntiArray(["apples", "bananas", "bananas"], ["bananas", "bananas", "apples"]) // false

- input: two arrays
- output: boolean
  - true if the two arrays are opposites of each other
- requirements:
  - opposite means both arrays comprised only from elements a and b and the occurrences of these elements are swapped between the two arrays
  - implicit:
    - if the arrays contain more than two values return false
    - return false if either array is empty
    - arrays can contain any types of data
    - need to handle unusual data like NaN, Infinity & - Infinity
    - arrays should be the same length to be opposites
- questions:
  - arrays only have two diffrent elements? if they contain more than two values return false
  - are two empty arrays opposites?
  - are the arguments passed in always arrays?
  - do we always get two arrays, or is one ever omitted from the arguments?
  - are the values of the arrays always strings?
  - do we need to handle unusual values like NaN, Infinity & -Infinity?
- edge cases:
  - one empty array
  - two empty arrays
  - arrays of different lengths
  - arrays with different data types
  - arrays with unusual data (NaN, Infinity)
  - array with more than two values
- data structue:
  - input: two arrays. Need to iterate through both at the same time, so keep as arrays
- algorithm:
  - if the array lengths are not the same or either array length is 0 return false
  - get the distinct values out of the first array ["1", "0"]
  - transform the first array to be it's opposite based on it's distinct values
    - iterate through the array
      - if the current element is equal to element 0 of the distinct values return element 1
      - vice versa
  - iterate through the transformed array and the second array
    - if both elements are NaN
      - continue
    - else if any elements are not equal to each other at the same index
      - return false
  - return true
*/
function isAntiArray(arr1, arr2) {
  if (arr1.length !== arr2.length ||
      arr1.length === 0 ||
      arr2.length === 0) return false;
  
  let distinctValues = unique(arr1);
  if (distinctValues.length !== 2) return false;

  let arr1Opposite = opposite(arr1, distinctValues);

  for (let i = 0; i < arr2.length; i += 1) {
    let value1 = arr1Opposite[i];
    let value2 = arr2[i];
    if (Number.isNaN(value1) && Number.isNaN(value2)) {
      continue;
    } else if (value1 !== value2) {
      return false;
    }
  }
  return true;
}

function unique(arr) {
  return arr.reduce((distinct, value) => {
    return distinct.includes(value) ? distinct : distinct.concat(value);
  }, []);
}

function opposite(arr, distinctValues) {
  return arr.map(element => {
    if (Number.isNaN(element)) {
      return Number.isNaN(distinctValues[0]) ? distinctValues[1] : distinctValues[0];
    }
    return distinctValues[0] === element ? distinctValues[1] : distinctValues[0]
  });
}

// Happy Path
console.log(isAntiArray(["1", "0", "0", "1"], ["0", "1", "1", "0"])) // true
console.log(isAntiArray(["apples", "bananas", "bananas"], ["bananas", "apples", "apples"])) // true
console.log(isAntiArray(["apples", "bananas", "bananas"], ["bananas", "bananas", "apples"])) // false
// Empty Arrays
console.log(isAntiArray([], ["1", "2"])); // false
console.log(isAntiArray([], [])); // false
// Different lengths
console.log(isAntiArray(["1", "0", "0", "1"], ["0", "1", "1"])); // false
// Different data types
console.log(isAntiArray(["1", "1", 1, 1], [1, 1, "1", "1"])); // true
// Unusual data
console.log(isAntiArray([NaN, NaN, Infinity, Infinity, NaN], [Infinity, Infinity, NaN, NaN, Infinity])); // true
console.log(isAntiArray([NaN, NaN, Infinity, Infinity, NaN], [Infinity, NaN, NaN, NaN, Infinity])); // false
// More than two distinct values
console.log(isAntiArray([1, 1, 2, 2], [1, 1, 3, 3])); // false