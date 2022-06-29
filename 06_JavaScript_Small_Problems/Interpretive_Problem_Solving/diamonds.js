"use strict";
/*
=== Understand the Problem ===
- notes:
  - display a four-pointed diamond in an `n` x `n` grid where `n` is an odd integer supplied as an argument to the function.
- input:
  - an odd integer of 1 or greater
- output:
  - return undefined, output a diamond
  - a series of strings with o or more spaces and start
- explicit requirements:
  - the input is always an odd integer
- implicit requirements:
  - need to account for a diamond size of 1
   diamond is represented by `*`
  - 9 -->
    *     4 spaces
   ***    3 spaces
  *****   2 spaces
 *******  1 spaces
********* 0 spaces
  - left pad of spaces is equal to the input number - number of stars divided by 2
- questions:
  - 
=== Examples / Test Cases ===
- 
=== Data Structures ===
- input: a number
- diamong
  - an array of lines to print
- requirements:
=== Algorithm ===
- declare an empty array for the rows in the diamond
- from 1 to the input number, incrementing by 2
  - calculate the number of spaces
  - add to the array the number of spaces plus the number of stars
- reassign rows to rows + the reverse of all the rows but the last one
- join the array with newlines and output

- for 1
- just add a *
- for all others add * + i - 2 spaces + *
*/
function diamond(size) {
  let rows = [];

  for (let i = 1; i <= size; i += 2) {
    let numSpaces = (size - i) / 2;
    let row = ' '.repeat(numSpaces) + `*`;
    
    if (i !== 1) {
      row = row + ' '.repeat(i - 2) + '*';
    }

    rows.push(row);
  }

  rows = rows.concat(rows.slice(0, -1).reverse());
  console.log(rows.join('\n'));
}
// provided (happy path)
diamond(1);
diamond(3);
diamond(9);
// large diamond
diamond(21);