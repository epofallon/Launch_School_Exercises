"use strict";
/*
=== Understand the Problem ===
- input:
  - a string
- output:
  - a string with every other character (when it is a letter) is capitalized
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
function staggeredCase(str) {
  let needFlip = true;
  return str.split('').map((char) => {
    if (/[a-z]/i.test(char)) {
      needFlip = !needFlip;
      return (!needFlip) ? char.toUpperCase() : char.toLowerCase();
    } else {
      return char;
    }
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"