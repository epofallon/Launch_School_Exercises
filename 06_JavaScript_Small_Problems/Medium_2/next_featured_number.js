/*
- notes:
  - a featured number
    - an odd integer
    - a multiple of 7
    - with all digits occurring only once in the number
49 -> featured
98 -> not featured (isn't odd)
97 -> not featured (isn't a multiple of 7)
133 -> not featured (the 3 digit appears twice)
- input: an integer
- output: an integer (the next featured number greater than the integer)
- requirements:
  - issue an error message if there is no next featured number
  - 9876543201 is the largest possible feature number
  - if the integer passed in is a featured number the next featured number is returned
  - check if the number is divisible by 7
  - check if the number is odd
  - check if the number's digits are all unique
- questions:
  - do we need to account for unusual numbers like NaN, Inifinity, -Infinity
  - do we need to account for non-number input or the input being ommitted?
  - do we need to account for negative numbers:
- data structure:
  - an integer to track odd numbers divisible by 7
  - use an array of characters to determine if the digits are all unique
- algorithm:
  - establish the next odd number divisible by 7
    - num = num + (7 - num % 7)
    - num += 7 until we have an odd number
  - iterate until 9876543201 is reached
    - if the digits are unique -> return the number
    - else increment by 14
  - if we don't return early in the loop
    - return "There is no possible number that fulfills those requirements."

  - unique digits
    - convert the number into a string
      - replace any non number characters
    - split the string into an array of characters
    - reduce to only unique digits
    - return the comparison of the length of digits and the length of unique digits
*/
const LARGEST_FEATURED = 9876543201;

function featured(num) {
  num = oddMultipleOf7(num);
  while (num <= LARGEST_FEATURED) {
    if (uniqueDigits(num)) {
      return num;
    }
    num += 14;
  }
  return "There is no possible number that fulfills those requirements.";
}

function oddMultipleOf7(num) {
  num = num + (7 - num % 7);
  if (num % 2 === 0) num += 7;
  return num;
}

function uniqueDigits(num) {
  let digits = String(num).replace(/\D/g, '').split('');
  let unique = digits.reduce((unique, digit) => {
    return unique.includes(digit) ? unique : unique.concat(digit);
  }, []);
  return digits.length === unique.length;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."
console.log(featured(-20)); // -7
