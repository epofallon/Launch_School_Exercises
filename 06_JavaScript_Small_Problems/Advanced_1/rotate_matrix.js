/*
- notes:
  - a matrix can be represented as an array of arrays.
  - a 90 degree rotation of a matrix produces a new matrix where each side is rotated clockwise by 90 degrees
    1 5 8    3 4 1    0:0->0:2 0:1->1:2 0:2->2:2
    4 7 2 -> 9 7 5 -> 1:0->0:1 1:1->1:1 1:2->2:1
    3 9 6    6 2 8    2:0->0:0 2:1->1:0 2:2->2:0
- input: an MxN matrix
- output: the 90 degree rotation of the input matrix
- rerquirements:
  - do not mutate the original array
- questions:
  - will the input ever be omitted?
  - will the array always be a valid matrix? i.e. will the array have at least one sub array and one element in that sub array?
- edge cases:
  - single row matrix
  - single column matrix
  - single element matrix
  - an empty array
  - an empty sub array
- data structure:
  - an array of arrays for both the input and the output
    - allows us flexibility with how we iterate through a matrix
- algorithm:
  - declare a new matrix to an empty array
  - add the number of rows to the new matrix equal to the number of columns in the original matrix
  - iterate from the first column to the last column
    - iterate from the last row to the first row
      - push the current element at [rIdx][cIdx] to the new matrix at [cIdx]
  - return the new matrix
*/
function rotate90(matrix) {
  let newMatrix = [];
  for (let i = 0; i < matrix[0].length; i += 1) {
    newMatrix.push([]);
  }
  
  for (let cIdx = 0; cIdx < matrix[0].length; cIdx += 1) {
    for (let rIdx = matrix.length - 1; rIdx >= 0; rIdx -=1) {
      newMatrix[cIdx].push(matrix[rIdx][cIdx]);
    }
  }
  return newMatrix;
}

const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

const newMatrix1 = rotate90(matrix1);
const newMatrix2 = rotate90(matrix2);
const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]

console.log(rotate90([[1, 2, 3, 4]])); // [[1], [2], [3], [4]];
console.log(rotate90([[1], [2], [3], [4]])); // [4, 3, 2, 1];
console.log(rotate90([[0]])); // [[0]];