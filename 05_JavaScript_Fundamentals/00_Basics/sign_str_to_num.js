/*
 - if there is a non integer character
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

function stringToSignedInteger(str) {
  switch(str[0]) {
    case '-': return -stringToInteger(str.slice(1));
    case '+': return stringToInteger(str.slice(1));
    default: return stringToInteger(str);
  }
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100