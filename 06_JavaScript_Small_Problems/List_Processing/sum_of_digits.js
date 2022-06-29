/*
=== Understand the Problem ===
- input:
  - an integer
- output:
  - an integer
- explicit requirements:
  - sum the digits
  - can't use for, while, or do...while
- implicit requirements:
  - 
=== Examples / Test Cases ===
- 
=== Data Structures ===
- 
=== Algorithm ===
- convert the input to a string
- split the string into an array of digits
- transform each digit back to a number and reduce to a sum
*/

function sum(num) {
  return String(num).split('')
                    .reduce((sum, digit) => sum + Number(digit), 0);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45