/*
- input: a string
- output: bool
  - true if the string passed in is a palindrom
  - false otherwise
- requirements:
  - case matters
  - all chars matter
*/
function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}


console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true