"use strict";
/*
=== Understand the Problem ===
- notes:
  - a substitution cipher where every letter is substituted by the letter located a given number of positions away in the alphabet
  - the shift value is referred to as a key
- input:
  - 
- output:
  - 
- explicit requirements:
  - only ecrypts letters
  - includes upper and lower case letters
  - non alhabetic characters are left as is.
  - if the key shift a letter past the end of the alphabet, it wraps around from to the beginning --> (y, 5) z, a, b, c, [d]
  a = 1
  z = 26
  
  y = 25
  
  25 + 5 = 30
  30 - 26 = 4
  d = 4
  
  when a letter is pushed past the last letter then (y + key) - 26
- implicit requirements:
  - when a letter is pushed past `z` or `Z` --> (ascii + key) - 26
  - otherwise we just have (ascii + key)
  - when `0` is the number, the original string is returned
  - when `26` is the number, the original string is returned
  - when we have a number greater than 26, add it to the ascii value, then keep subtracting 26 until our number is less than the final ascii value
  25 + 31 = 56
  56 - 26 = 30
  30 - 26 = 4
- questions:
  - 
=== Examples / Test Cases ===
- 
=== Data Structures ===
- input: a string and a key
- split the string into an array of characters
- transform the array of characters
  - when we have a lowercase letter
    - convert to the ascii value
    - shift the ascii value by the key
    - subtract 26 from the new value until it is less than or equal to the value of `z`
  - when we have an uppercase letter
    - convert to the ascii value
    - shift the ascii value by the key
    - subtract 26 from the new value until it is less than or equal to the value of `Z`
  - when we have any other character
    - return as is
- join back into a string and return
- requirements:
=== Algorithm ===
- 
*/
let p = arg => console.log(arg);

function caesarEncrypt(message, key) {
  function getNewLetter(char) {
    let boundLetter = /[a-z]/.test(char) ? 'z' : 'Z';
    if (/[a-z]/i.test(char)) {
      char = shiftLetter(char, key, boundLetter);
    }
    return char;
  }
  
  return message.split('').map(getNewLetter).join('');
}

function shiftLetter(char, key, boundLetter) {
  const NUM_LETTERS = 26;
  let boundCode = boundLetter.charCodeAt();
  let newCode = char.charCodeAt() + key;
  for (; newCode > boundCode; newCode -= NUM_LETTERS) {}
  return String.fromCharCode(newCode);
}

// simple shift
p(caesarEncrypt('A', 0)); // "A"
p(caesarEncrypt('Hello', 26)); // "Hello"
p(caesarEncrypt('A', 3)); // "D"

// wrap around
p(caesarEncrypt('y', 5)); // "d"
p(caesarEncrypt('a', 47)); // "v"


// all letters
p(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25)); // "ZABCDEFGHIJKLMNOPQRSTUVWXY"
p(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5)); // "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
p(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2)); // "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"