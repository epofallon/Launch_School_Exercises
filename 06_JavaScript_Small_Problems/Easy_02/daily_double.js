// take a string argument
// returns a new string that contains the value of the original string, but
// with all consecutive duplicate characters collapsed into a single character.

// algorithm
/* - declare a condensed string
   - iterate through the indexes of the current string
   - if the character at the current index of the input string is equal to the 
     last character in the condensed string
     - skip to the next iteration
   - add that character to the condensed string
   - return the condensed string
  */
function crunch(string) {
  let squishedString = '';
  for (let idx = 0; idx < string.length; idx += 1) {
    let lastIdx = (squishedString.length === 0 ? 0 : squishedString.length - 1);
    if (string[idx] === squishedString[lastIdx]) continue;
    squishedString += string[idx];
  }
  return squishedString;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""