"use strict";
/*
=== Understand the Problem ===
- notes:
*  *  *
 * * *
  ***
*******

0 * 2 * 2 *
1 * 1 * 1 *
2 * 0 * 0 *

0 * 3 * 3 *
1 * 2 * 2 *
2 * 1 * 1 *
3 * 0 * 0 *
*   *   *
 *  *  *
- input:
  - an odd integer
- output:
  - return is insignificant.
  - logs a star to the console.
- explicit requirements:
  - don't have to do less than 7
  - the input is an odd integer
- implicit requirements:
  - left pad starts at 0 & increments until the center pads are 0
  - center pads start at input number - 3 / 2 & decrement by 1 until zero
  - the center line is a line of starts the length of the input integer
- questions:
  - 
=== Examples / Test Cases ===
- 
=== Data Structures ===
- input: an odd integer
- requirements: an array of rows for the lines with the diagonals. means we can use it forwards and backwards
  - a string for the center row.
=== Algorithm ===
- initialize an empty array
- iterate from 0 (the input number - 3) / 2
  - assign middleSpace to (the input number - 3) / 2 - leftspace
  - let a line equal the a space (leftspace times) + a star + a space (middlespace times) + a star + a space (middle space times) + a star
- add the centerline to the array as the last element
- join into a string the array + the reverse of all the lines but the center
- log that string to the console
*/
function star(size) {
  let rows = [];
  generateRows(rows, size);
  let starStr = rows.concat(rows.slice(0, -1).reverse()).join('\n');
  console.log(starStr);
}

function generateRows(rows, size) {
  for (let pad = 0; pad <= (size - 3) / 2; pad += 1) {
    let space = ((size - 3) / 2) - pad;
    let row = ' '.repeat(pad) + ('*' + ' '.repeat(space)).repeat(2) + '*';
    rows.push(row);
  }
  rows.push('*'.repeat(size));
}

star(7);
star(9);
star(19);