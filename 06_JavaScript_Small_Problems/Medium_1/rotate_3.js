/*
== Understand the Problem ==
- notes:
  - Take a number and rotate it by one digit to the left (735291 -> 352917)
  - Then keep the digit in the place of the rotated digit in place and rotate the next right-most digit
    - (352917 -> 329175)
  - Then keep the digits to the left of last rotated digit in place and rotate the next available digit
    - (329175 -> 321759)
    - (321759 -> 321597)
    - (321597 -> 321579)
- input: a number
- ouput: the maximum rotation of the original number
- requirments:
  - keep rotating a number until you have the maximum rotation
    - the maximum rotation is when each digit place going from left to right, except the last digit, has experienced a rotation
  - a leading zero will get dropped
  - a single digit number will be returned
- data structure:
  - an array of characters to be able to to easily iterate and split up the characters
- algorithm:
  - convert the number to an array of number characters
  - iterate from the first element to the second to last element
    - remove the element at the current index, then add it back to the end
  - convert the array of number characters back into a number


(735291 -> 352917)
 ^              ^
(352917 -> 329175)
  ^             ^
(329175 -> 321759)
   ^            ^
(321759 -> 321597)
    ^           ^
(321597 -> 321579)
     ^          ^
*/
let p = arg => console.log(arg);

function maxRotation(num) {
  let digits = String(num).split('');

  for (let i = 0; i < digits.length - 1; i += 1) {
    digits.push(...digits.splice(i, 1));
  }
  
  return Number(digits.join(''));
}

p(maxRotation(735291));          // 321579
p(maxRotation(3));               // 3
p(maxRotation(35));              // 53
p(maxRotation(105));             // 15 -- the leading zero gets dropped
p(maxRotation(8703529146));      // 7321609845