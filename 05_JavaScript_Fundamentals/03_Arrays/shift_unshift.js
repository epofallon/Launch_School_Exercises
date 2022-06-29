/*
=== shift ===
- inputs: an array
- output: the first element of that array
- requirements: alters the array
- returns that first element
- mutate the array
  - iterate from the first element to the last element
    - assign the element at the current index to the element at the next index
- subtract 1 from the array's length

=== unshift ===
- inputs: an array & one or more elements to add to the start of the array
- output: the new length of the array
- requirements:
  - just returns the current length if no arguments are passed in
- algorithm:
  - for each argument passed in (starting with the last argument)
    - loop through the array from last index to 0;
      - if the idx is not 0:
        - assign [idx + 1] to the element at [idx]
      - else
        - assign [idx + 1] to the element at [idx]
        - assign [idx] to the argument passed in
*/

function shift(arr) {
  let firstElement = arr[0];
  
  for (let idx = 0; idx < arr.length; idx += 1) {
    arr[idx] = arr[idx + 1];
  }
  
  if (arr.length > 0) {
    arr.length -= 1;
  }
  return firstElement;
}

function unshift(arr, ...args) {
  for (let argsIdx = args.length - 1; argsIdx >= 0; argsIdx -= 1) {
    let currentArg = args[argsIdx];

    for (let arrIdx = arr.length - 1; arrIdx >= 0; arrIdx -= 1) {
      arr[arrIdx + 1] = arr[arrIdx];

      if (arrIdx === 0) {
        arr[arrIdx] = currentArg;
      }
    }
  }
  return arr.length;
}


// console.log(shift([1, 2, 3]));                // 1
// console.log(shift([]));                       // undefined
// console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

const testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]