/*
=== slice ===
- inputs: an array, a beginning & ending index
- output: a new array containing the extracted elements
- requirements:
  - don't include the element at the ending index
  - indexes will always be integers >= 0
  - if the value of either index is greater than the length of the array, set it equal to the length.
- algorithm:
  - if the beginning idx is greater than the array length, set it to the array length
  - if the ending idx is greater than the array length, set it to the array length
  - declare a slicedArr to an empty array
  - loop from the beginning idx upto the ending idx
    - 
*/
function slice(array, begin, end) {
  if (begin > array.length) {
    begin = array.length;
  }
  
  if (end > array.length) {
    end = array.length;
  }
  
  let sliced = [];
  
  for (let idx = begin; idx < end; idx += 1) {
    sliced.push(array[idx]);
  }
  
  return sliced;
}

// console.log(slice([1, 2, 3], 1, 2));               // [2]
// console.log(slice([1, 2, 3], 2, 0));               // []
// console.log(slice([1, 2, 3], 5, 1));               // []
// console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

// const arr1 = [1, 2, 3];
// console.log(slice(arr1, 1, 3));                     // [2, 3]
// console.log(arr1);                                  // [1, 2, 3]

/*
=== splice ===
- inputs:
  - an array
  - a starting index
  - a deleteCount
  - zero or more elements to add
- outputs:
  - returns a new array containing the deleted elements
    - or an empty array if no elements are deleted
- requirements
  - mutates the original array
    - removes the `deleteCount` number of elements, beginning at the `start` idx
  -  insert `elements` into the original array beginning at the start idx
  - the values of `start` and `deleteCount` will always be integers >= 0
  - if `start` is > the array length, set it equal to the length
  - if `deleteCount` is > the number of elements from `start` up to the end of the array, set `deleteCount`
    to the difference between the array's length and `start`.
- algorithm:
  - declare deleted and initialize to an empty array
  - if start > array length
    - set start to array length
  - if deleteCount > (array length - start idx)
    - set deleteCount to (array length - start idx)
  - use slice to extract deleted elements
    - start = start; end = start + count;
  - add elements if any passed in
    - loop through the argument elements
      - set currentArgument to the argument at the current argsIdx
      - loop from the final index until we hit the start index (start at the last element, go until your at the start idx)
        - set the element at [idx + 1] to the element at [idx]
        - if idx is equal to the start idx
          - set the element at [idx] to the currentArgument
      - increment the start index by 1
*/
function splice(array, start, deleteCount, ...elements) {
  if (start > array.length) {
    start = array.length;
  }
  
  if (deleteCount > array.length - start) {
    deleteCount = array.length - start;
  }
  
  let deleted = removeElements(array, start, deleteCount + start);
  if (elements.length !== 0) {
    addElements(array, start, elements);
  }
  return deleted;
}

function removeElements(array, begin, end) {
  if (begin > array.length) {
    begin = array.length;
  }
  
  if (end > array.length) {
    end = array.length;
  }
  
  let sliced = [];
  
  for (let idx = begin; idx < end; idx += 1) {
    sliced.push(array[idx]);
    array[idx] = array[idx + (end - begin)];
  }
  array.length -= (end - begin);
  
  return sliced;
}

function addElements(array, startIdx, elements) {
  for (let elementIdx = 0; elementIdx < elements.length; elementIdx += 1) {
    let currentElement = elements[elementIdx];
    
    if (startIdx > array.length - 1) {
      array.push(elements[elementIdx]);
    } else {
      for (let arrIdx = array.length - 1; arrIdx >= startIdx; arrIdx -= 1) { // something wrong here
        array[arrIdx + 1] = array[arrIdx];
        
        if (arrIdx === startIdx) {
          array[arrIdx] = currentElement;
        }
      }
    }
    
    startIdx += 1;
  }
}

// console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
// console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
// console.log(splice([1, 2, 3], 1, 0));              // []
// console.log(splice([1, 2, 3], 0, 1));              // [1]
// console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

const arr2 = [1, 2, 3];
console.log(splice(arr2, 1, 1, 'two'));             // [2]
console.log(arr2);                                  // [1, "two", 3]

const arr3 = [1, 2, 3];
console.log(splice(arr3, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr3);                                  // [1, "two", "three"]

const arr4 = [1, 2, 3];
console.log(splice(arr4, 1, 0));                    // []
console.log(splice(arr4, 1, 0, 'a'));               // []
console.log(arr4);                                  // [1, "a", 2, 3]

const arr5 = [1, 2, 3];
console.log(splice(arr5, 0, 0, 'a'));               // []
console.log(arr5);                                  // ["a", 1, 2, 3]