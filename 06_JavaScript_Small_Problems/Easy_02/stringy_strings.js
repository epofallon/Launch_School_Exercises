/*
- input:
  - a positive integer
- output:
  - a string alternating `1`s and `0`s
- explicit requirements:
  - always start with `1`.
*/

function stringy(length) {
  let string = '';
  
  for (let idx = 1; idx <= length; idx += 1) {
    string += (idx % 2 === 0 ? '0' : '1');
  }
  
  return string;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"