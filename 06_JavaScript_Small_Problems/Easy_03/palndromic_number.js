function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

function isRealPalindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[^a-z0-9]/ig, '');
  console.log(str);
  return isPalindrome(str);
}

function isPalindromicNumber(num) {
  return isRealPalindrome(String(num));
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true