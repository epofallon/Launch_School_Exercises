"use strict";
/*
=== Understand the Problem ===
- input:
  - a string
- output:
  - an object containint uppercase, lowercase & neither character counts
- explicit requirements:
  - 
- implicit requirements:
  - 
=== Examples / Test Cases ===
- 
=== Data Structures ===
- 
=== Algorithm ===
- find matches for lowercase
- find matces uppercase
*/
function letterCaseCount(str) {
  let counts = {};
  counts.lowercase = countMatches(str, /[a-z]/g);
  counts.uppercase = countMatches(str, /[A-Z]/g);
  counts.neither = countMatches(str, /[^a-z]/gi);
  return counts;
}

function countMatches(str, regex) {
  let matches = str.match(regex) || [];
  return matches.length;
}



console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }