/*
- inputs:
  - a number
- outputs:
  - a string
- algorithm:
  - declare a variable str and set it to an empty string
  - while our number is greater than 0
    - pull the bottom most digit out with % 10
    - use that digit as the index of the DIGITS array to get a string
    - add that string to str
    - reassing the number to Math.floor(number / 10)
  - return str
*/

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(num) {
  let str = '';

  do {
    str = DIGITS[num % 10] + str;
    num = Math.floor(num / 10);
  } while (num > 0)

  return str;
}

function signedIntegerToString(num) {
  if (num > 0) {
    return '+' + integerToString(num);
  } else if (num < 0) {
    return '-' + integerToString(-num);
  } else {
    return integerToString(num);
  }
}

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"