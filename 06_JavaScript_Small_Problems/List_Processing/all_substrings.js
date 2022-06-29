/*
=== Understand the Problem ===
- input:
  - a string
- output:
  - an array of all substrings
- explicit requirements:
  - 
- implicit requirements:
  - 
=== Examples / Test Cases ===
- 
=== Data Structures ===
- 
=== Algorithm ===
- declare a results array
- iterate through starting indexes
  - slice the string from the starting index through the end.
    - pass that string into leadingSubstrings.
    - concat results with the return array of leadingSubstrings & reassing results
*/
function leadingSubstrings(str) {
  return str.split('')
            .map((_, idx) => str.slice(0, idx + 1));
}

function substrings(str) {
  return str.split('')
            .map((_, idx) => leadingSubstrings(str.slice(idx)))
            .flat();
}

console.log(substrings('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]