function pop(arr) {
  let lastElement = arr[arr.length - 1];
  
  arr.length -= 1;
  return lastElement;
}

// pop
const array1 = [1, 2, 3];
pop(array1);                        // 3
console.log(array1);                // [1, 2]
pop([]);                           // undefined
pop([1, 2, ['a', 'b', 'c']]);      // ["a", "b", "c"]

function push(arr, ...newElements) {
  for (let idx = 0; idx < newElements.length; idx += 1) {
    arr[arr.length] = newElements[idx];
  }
  return arr.length;
}

// push
const array2 = [1, 2, 3];
push(array2, 4, 5, 6);              // 6
console.log(array2);                // [1, 2, 3, 4, 5, 6]
push([1, 2], ['a', 'b']);          // 3
push([], 1);                       // 1
push([]);                          // 0