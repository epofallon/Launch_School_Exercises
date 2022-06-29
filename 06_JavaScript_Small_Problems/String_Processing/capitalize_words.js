"use strict";
/*
=== Understand the Problem ===
- input:
  - a string
- output:
  - a string with the first letter of each word capitalized and all others lowercased
  - 
- explicit requirements:
  - a word is any sequence of non-whitespace characters
- implicit requirements:
  - 
=== Examples / Test Cases ===
- 
=== Data Structures ===
- 
=== Algorithm ===
- 
*/
function wordCap(str) {
  return str.split(' ').map(capitalize).join(' ');
}

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'