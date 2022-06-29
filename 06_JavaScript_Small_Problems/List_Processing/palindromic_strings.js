/*
=== Understand the Problem ===
- input:
  - a string
- output:
  - an array of all palindromic substrings
- explicit requirements:
  - sorts substrings by order of appearance in the string
  - include duplicate substrings mutliple times
- implicit requirements:
  - 
=== Examples / Test Cases ===
- 
=== Data Structures ===
- 
=== Algorithm ===
- 
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

function palindromes(str) {
  return substrings(str).filter(isPalindrome);
}

function isPalindrome(str) {
  return str.length > 1 && str === str.split('').reverse().join('');
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]