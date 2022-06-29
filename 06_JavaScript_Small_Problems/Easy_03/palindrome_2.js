function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

function isRealPalindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[^a-z0-9]/ig, '');
  console.log(str);
  return isPalindrome(str);
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false