"use strict";
/*
=== Understand the Problem ===
- input:
  - an array of strings
- output:
  - an array of strings with all vowels removed
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
function removeVowels(arr) {
  return arr.map(str => str.replace(/[aeiou]/ig, ''));
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]