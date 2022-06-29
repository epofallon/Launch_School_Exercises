/*
=== Understand the Problem ===
- notes:
  - move the first element of an array to the end of the array.
- input:
  - 
- output:
  - 
- explicit requirements:
  - Don't modify the array
  - make the first element of the array passed in the last element in a new array
  - return `undefined` if the input isn't an array
  - return an empty array if the input is an empty array
- implicit requirements:
  - a one element array should return a new array with the same element
  - array elements can be of any type
- questions:
  - does it matter if the empty array returned by passing in an empty array is the original array, or a new array?
=== Examples / Test Cases ===
- 
=== Data Structures ===
- input: an array
  - keep the data as an array, so we can slice it into the needed sections
- output: a new array
- requirements: N/A
=== Algorithm ===
- 
- if the input is an array:
  - if the input array is empty (the length is 0) return a copy of the input array
  - else return the slice starting at index 1 through the end of the array with the first element concatenated to the end
*/
let p = arg => console.log(arg);

function rotateArray(arr) {
  if (Array.isArray(arr)) {
    return arr.slice(1).concat(arr.slice(0, 1));
  }
}

// happy path
p(rotateArray([1, 2, 3, 4, 5])); // [2, 3, 4, 5, 1]
p(rotateArray(['a', 2, [3, 4], { a: 1, b: 2 }])); // [2, [3, 4], { a: 1, b: 2 }, 'a']
let sparseArr = new Array(2);
sparseArr = sparseArr.concat(1, 2, 3);
p(rotateArray(sparseArr));

// no mutation
let arr = [1, 2, 3, 4, 5];
p(rotateArray(arr)); // [2, 3, 4, 5, 1]
p(arr);              // [1, 2, 3, 4, 5]

// invalid input
p(rotateArray('hello'));        // undefined
p(rotateArray({ a: 1, b: 2 })); // undefined

// empty array
p(rotateArray([])); // []

// empty array is new array
let emptyArr = [];
let otherArr = rotateArray(emptyArr);
p(emptyArr !== otherArr); // true

// one element array
p(rotateArray(['A'])); // ['A']
p('');
p(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
p(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
p(rotateArray(['a']));                    // ["a"]
p(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
p(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
p(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
p(rotateArray());                         // undefined
p(rotateArray(1));                        // undefined


// the input array is not mutated
const array = [1, 2, 3, 4];
p(rotateArray(array));                    // [2, 3, 4, 1]
p(array);                                 // [1, 2, 3, 4]