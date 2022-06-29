/*
- notes:
  - a 3x3 can be represented as an array of arrays
  1 5 8    [[1, 5, 8],
  4 7 2 --> [4, 7, 2],
  3 9 6     [3, 6, 9]]
  - accessing elements -> array[row][column]
  - a transpose is a result of exchanging the rows and columns of the original matrix
  1 5 8     1 4 3
  4 7 2 --> 5 7 9
  3 9 6     8 2 6
  
  [0:0 -> 0:0] [0:1 -> 1:0] [0:2 -> 2:0]
  [1:0 -> 0:1] [1:1 -> 1:1] [1:2 -> 2:1]
  [2:0 -> 0:2] [2:1 -> 1:2] [2:2 -> 2:2]

- input: a 3 x 3 matrix (an array of arrays)
- ouput: a different 3x3 matrix (the tranpose of the input)
- requirements:
  - elements that have a matching row and column coordinate don't switch
  - elements that don't have a matching row and column get swapped
- data structure:
  - since both the input and output are an array of arrays it makes sense to use it
  - we can also use map to transoform the array and return a new array
- algorithm:
  - map through the outer array
    - return a new row -> map through the inner array
      - return the element at the inverted access point
*/
function transpose(matrix) {
  // return matrix.map((row, rIdx) => {
  //   return row.map((_, cIdx) => matrix[cIdx][rIdx]);
  // });
  let numRows = matrix[0].length;
  let newMatrix = [];
  for (let i = 0; i < numRows; i += 1) {
    newMatrix.push([]);
  }
  for (let rIdx = 0; rIdx < matrix.length; rIdx += 1) {
    for (let cIdx = 0; cIdx < matrix[0].length; cIdx += 1) {
      newMatrix[cIdx].push(matrix[rIdx][cIdx]);
    }
  }
  return newMatrix;
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]
console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]

/*
[[1, 2, 3, 4]] -> [[1],
                   [2],
                   [3],
                   [4]]
- however many columns there are is the number of rows we need to generate
- iterate through the given matrix
  - iterate through the rows of the given matrix
    - iterate through the columns of the given matrix
      - push the element at r,c to c,r
*/