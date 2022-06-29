"use strict";
/*
=== Understand the Problem ===
- input:
  - a string
- output:
  - 
- explicit requirements:
  - 
- implicit requirements:
  - 
=== Examples / Test Cases ===
- 
=== Data Structures ===
- 
=== Algorithm ===
- 
*/
function swapCase(str) {
  return str.split('').map(swap).join('');
}

function swap(char) {
  return /[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase();
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"