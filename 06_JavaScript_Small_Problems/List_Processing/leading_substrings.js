/*
=== Understand the Problem ===
- input:
  - a string
- output:
  - a list of substrings
    - each substring begins with the first letter of the word
- explicit requirements:
  - 
- implicit requirements:
  - 
=== Examples / Test Cases ===
- 
=== Data Structures ===
- 
=== Algorithm ===
- map through an array of characters with index
  - slice the string
*/

function leadingSubstrings(str) {
  return str.split('')
            .map((_, idx) => str.slice(0, idx + 1));
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]