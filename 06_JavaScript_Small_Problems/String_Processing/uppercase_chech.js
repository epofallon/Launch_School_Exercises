"use strict";
/*
=== Understand the Problem ===
- input:
  - a string
- output:
  - true if all the alphabetic characters inside the string are uppercase.
- explicit requirements:
  - 
- implicit requirements:
  - 
=== Examples / Test Cases ===
- 
=== Data Structures ===
- 
=== Algorithm ===
- test if the string contains any lowercase letters
*/

function isUppercase(str) {
  return !/[a-z]/.test(str);
}


console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true