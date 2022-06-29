/*
- notes:
  - sort an array using the bubble algorithm
  - make multiple passes through an array
    - on each pass two consecutive elements are compared
      - if the first value is greater than the second value
        - swap the elements
    - keep passing through the array until a pass is completed without performing any swaps
    - after the first pass the final element is in place and doesn't need to be touched again
    - after the second pass the 2nd to final element is in place and doesn't need to be touched again
- input: an array
- output: a reference to the original array
- requirements:
  - sort the array in place (mutate it)
- edge cases:
  - an empty array
  - a single element array
- questions:
  - will the input always be an array?
  - will the array ever be sparse?
  - will the array ever contain non-primitive elements?
  - will the array ever contain more than one data type? -> [1, '4', true, '5']
- data structure:
  - the array passed in needs to be mutated, so we will keep the array
    - for iteration we can use loops
- algorithm:
  - if the array has less than two elements return;
  - declare a length variable to the length of the input array
  - declare a swap value
  - begin a do..while loop that checks if the swap value if true at the end of the loop
    - set swap to false
    - iterate through the array going from index 0 to the 2nd-to-last index
      - if the element at the current index is greater than the element at the next index
        - swap the elements
        - assign swap to true
    - decrease the length by 1 after every pass through the array (because the last element is set in its final place)
  - if swap if true loop again. if false end looping

[5, 3, 7, 1] -> (5 > 3) -> true -> swap
 ^  ^
[3, 5, 7, 1] -> (5 > 7) -> false -> no swap
    ^  ^
[3, 5, 7, 1] -> (7 > 1) -> true -> swap
       ^  ^
swap was true so iterate again
[3, 5, 1, 7] -> (3 > 5) -> false -> no swap
 ^  ^
[3, 5, 1, 7] -> (5 > 1) -> true -> swap
    ^  ^
[3, 1, 5, 7] -> (5 > 7) -> false -> no swap
       ^  ^
swap was true so iterate again
[3, 1, 5, 7] -> (3 > 1) -> true -> swap
 ^  ^
swap was true so iterate again
swap was false so break iteration
*/
function bubbleSort(arr) {
  let length = arr.length;
  if (length < 2) return;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < length - 1; i += 1) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i);
        swapped = true;
      }
    }
    length -= 1;
  } while (swapped);
}

function swap(arr, i) {
  [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
}


const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

// empty array
const array4 = [];
bubbleSort(array4);
console.log(array4);    // [];

// one element array
const array5 = ['g'];
bubbleSort(array5);     // ['g'];
console.log(array5);