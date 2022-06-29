/*
=== Understand the Problem ===
- rotate the last `n` digits of a number
  - rotate means pull out the digit at the specified location and put it in the `ones` place
    - `1` means pull out the ones place and put it in the ones place
    - `2` means pull out the tens digit and put it in the ones place
    - `3` means pull out the hundreds digit and put it in the ones place
- input: a number to rotate, and a number that specifies which digit to rotate in the first number
- output: a number with the rotation completed
- requirements:
  - pull out the digit at the specified location
  - shift the numbers to the right of the digit pulled out one place to the left
  - add the pulled out digit as the ones location
- questions:
  - Do we need to account for invalid inputs including non-numerical input, Infinity, & NaN?
  - What happens when the second number specifies a place that is bigger than the number?
  - Do we need to account for the second number being zero?
  - Do we need to account for negative numbers as a specified location?
- implicit requirements:
  - if the number specifying the digit to rotate is larger than the number of digits, return the original number
  - if the second number is zero return the original number
- data structure
  - convert the number into a string of digits (as strings) so that we can perform slicing and concatentaion
- algorithm:
  - convert the number to rotate into an string of digits
  - slice out the elements to leave alone (0 up to, but not including the element at length - digits to flip)
    [1, 2, 3, 4, 5] & 3
    slice(0, 5 - 3) -> slice(0, 2) [1, 2]
  - slice out the elements to flip
  - flip the first elemnt to the last
    - concatenate the strings elements 1..length - 1 and 0
  - concatenate the string left alone with the flipped string
  - convert back to a number
*/
let p = arg => console.log(arg);

function rotateRightmostDigits(num, n) {
  let strNum = String(num);
  if (strNum.length < n) return num;

  let left = strNum.slice(0, strNum.length - n);
  let right = strNum.slice(strNum.length - n);
  
  right = rotateString(right);
  return Number(left + right);
}

function rotateString(str) {
  return str.slice(1) + str.slice(0, 1);
}

console.log(rotateRightmostDigits(735291, 0));      // 735291
console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
console.log(rotateRightmostDigits(735291, 7));      // 735291