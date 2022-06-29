/*
- input: a string of digits
- output: a number
- algorithm:
  - declare num and initialize to 0
  - reverse the string
  - iterate through the string
    - get the corresponding digit from NUM_CHARS
    - add digit * 10 ^ idx to the result
  - return num
*/

const NUM_CHARS = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4,
                    5: 5, 6: 6, 7: 7, 8: 8, 9: 9 };

function stringToInteger(str) {
  let num = 0;
  
  for (let idx = 0; idx < str.length; idx += 1) {
    num = (10 * num) + NUM_CHARS[str[idx]];
  }
  
  return num;
}

console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570