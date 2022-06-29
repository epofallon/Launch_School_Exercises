/*
- notes:
  - binary search allows you to cut the search area in half on each iteration by discarding the half that you know your search term doesn't exist in.
  - this relies on the data being sorted.
- input: an array and a search item
- output: the index of the search item if found or -1 if not found
- requirements:
  - the array argument will always be sorted
- edge cases:
  - empty array -> -1
  - array has data types that don't match the search term
  - array is ommitted
  - search term is ommitted
  - search term and array elements are non-primitive data types
  - finding the first or last element in an array
- questions:
  - can the array contain more than one data type?
  - will the search term's data type always be the same as the data type of the array elements?
  - will either input ever be missing?
  - will we need to account for finding non-primitive data types (objects, other arrays)
- data structure:
  - an array will be useful. we can splice out parts of the array we don't need
- algorithm:
  - initialize low to 0
  - initialize high to the array length - 1
  - iterate while low less than or equal to high
    - get mid as low + Math.floor((high - low) / 2)
*/
function binarySearch(arr, searchTerm) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (arr[mid] === searchTerm) {
      return mid;
    } else if (arr[mid] < searchTerm) {
      low = mid + 1;
    } else if (arr[mid] > searchTerm) {
      high = mid - 1;
    }
  }
  return -1;
}


const yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 102));     // 8

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6

console.log(binarySearch([], 1)); // -1