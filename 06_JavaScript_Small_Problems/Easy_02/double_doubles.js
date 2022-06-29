/*
- a double number is an even-length number whose left-side digits are exactly teh same as its right-side digits.
- input: a number
- output:
  - return the number multiplied by two
  - unless the argument is a double number
    - return the double number as is.
- algorithm
  if double number
    return number
  else
    return number * 2
- double number
  - convert to string
  - if string length isn't divisible by 2, return false
  - if 
*/

function twice(num) {
  if (isDouble(num)) {
    return num;
  } else {
    return num * 2;
  }
}

function isDouble(num) {
  let stringNum = String(num);
  
  if (stringNum.length % 2 !== 0) return false;
  
  let firstHalf = stringNum.slice(0, stringNum.length / 2);
  let secondHalf = stringNum.slice(stringNum.length / 2);
  
  return firstHalf === secondHalf;
}

console.log(twice(37));          // 74 --> multiplied
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866 --> multiplied
console.log(twice(444));         // 888 --> multiplied
console.log(twice(107));         // 214 --> multiplied
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676