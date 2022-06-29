// Question

// Given two arrays `smarr` and `bigarr`, we can say smallest is an *ordered subarray* of `bigarr` if all the elements of `smarr` can be found in `bigarr`, and *in the same order*. Write a function that, given arrays `smarr` and `bigarr`, decides if `smarr` is an ordered subarray of `bigarr`.
/*
Understand the Problem
- input: a small array and a big array
- outputs:
  - true if the small array is a ordered subarray of the big array
- requirements:
  - Orderd: The elements in the small array need to be found in order in the big array
  - the elements in the small array don't have to come immediately one after the other, they just need to be in successive order in the larger array
- edge cases:
  - order of arguments: small array will always be first argument:
  - arrays can be empty
  - no need to address empty elements (sparse arrays)
  - elements in the input arrays are always numbers
- data structures:
  - input: two arrays
    - iteration -> arrays element
  - output: true or false
- algorithm:
Sentence -> 

  - declare copy of the bigger array to mutate
  - iterate through the small array
    - get the current number from the small array to search for
    - get the slice of the big array that I need to search
    - if the current element of the small array exists in the slice of the big array
      - change the slice of the big array to only the elements past where that element was found
        - record the index of the found number for the next slice
        - slice past that element in the big array.
    - if the current element of the small array wasn't found in the slice of the big array
      - return false
  - return true
*/


function isOrdSub(smArr, bigArr) {
  let bigArrCopy = bigArr.slice();

  for (let idx = 0; idx < smArr.length; idx += 1) {
    let num =smArr[idx];
    let bigArrIdx = bigArrCopy.indexOf(num);
    if (bigArrIdx !== -1) {
      bigArrCopy = bigArrCopy.slice(bigArrIdx + 1);
    } else {
      return false;
    }
  }

  return true;
}

// EXAMPLES / TEST CASES

console.log(isOrdSub([4, 3, 2], [5, 4, 3, 2, 1])) // true
console.log(isOrdSub([5, 3, 1], [5, 4, 3, 2, 1])) // true
console.log(isOrdSub([5, 3, 1], [1, 2, 3, 4, 5])) // false
console.log(isOrdSub([1, 2, 3], [3, 2, 1, 2, 3])) // true

// empty arrays
console.log(isOrdSub([], [1, 2, 3, 4, 5])); // true
console.log(isOrdSub([1, 2, 3], [])); // false
console.log(isOrdSub([1, 2, 3], [NaN, 2, 1, Infinity, 2, 3])) // true