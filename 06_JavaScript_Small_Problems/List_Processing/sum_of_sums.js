/*
=== Understand the Problem ===
- input:
  - an array of numbers
- output:
  - a number
    - the sum of the sum of each leading subsequence in that array
- explicit requirements:
  - 
- implicit requirements:
  - 
=== Examples / Test Cases ===
- 
=== Data Structures ===
- 
=== Algorithm ===
- reduce the array to the 
*/

function sumOfSums(arr) {
  return arr.reduce((sum, n, idx) => {
    return sum + arr.slice(0, idx + 1)
                    .reduce((subSum, subNum) => {
      return subSum + subNum;
    });
  });
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35