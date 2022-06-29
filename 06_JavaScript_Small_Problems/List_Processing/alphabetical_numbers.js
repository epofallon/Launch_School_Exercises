/*
=== Understand the Problem ===
- input:
  - an array of integers between 0 & 19
- output:
  - an array of integers sorted based on the english word for each number
- explicit requirements:
  - do not mutate the argument
- implicit requirements:
  - 
=== Examples / Test Cases ===
- 
=== Data Structures ===
- 
=== Algorithm ===
- make a copy of the array
- use the `sort` method
  - compare the string equivalents of each number
*/
const NUMBERS = ['zero', 'one', 'two', 'three', 'four', 'five',
                 'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
                 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
                 'seventeen', 'eighteen', 'nineteen'];

function alphabeticNumberSort(arr) {
  return [...arr].sort((num1, num2) => {
    if (NUMBERS[num1] < NUMBERS[num2]) {
      return -1;
    } else if (NUMBERS[num1] > NUMBERS[num2]) {
      return 1;
    } else {
      return 0;
    }
  });
}

console.log(alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]