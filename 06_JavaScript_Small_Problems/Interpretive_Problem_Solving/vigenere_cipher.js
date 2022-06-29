"use strict";
/*
=== Understand the Problem ===
- notes:
  - uses a series of Caesar Ciphers based on the letters of a keyword.
- input:
  - a message as text
  - a keyword as a sequence of any characters
- output:
  - a message with the letters encrypted. same number of characters as the input message.
- explicit requirements:
  - each letter in the keyword is treated as a shift value a-z => 0-25
  - shift values for letters are case insensitive
  - we don't move to the next letter in the keyword when a character in the message isn't a letter.
- implicit requirements:
  - need to remove non-letter chars from the keyword
- questions:
  - 
=== Examples / Test Cases ===
- 
=== Data Structures ===
- input: a string -> split into an array of characters so we can perform transformation on each individual character
- requirements: an array of letters. Allows us to utilize their indexes as shift values
'abcdefghijklmnopqrstuvwxyz'.split('');
=== Algorithm ===
- transform the keyword into an array of shift values
- set a key index to 0
- split the input message into an array of characters
- iterate through the array of characters
  - if a character is a letter
    - determine if the key is upper or lowercase
    - use the current key to shift the letter
    - increment the key index (or set back to 0 if the current index is the last index)
  - return the character
*/
let p = arg => console.log(arg);

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

function vigenereEncrypt(message, keyword) {
  let keys = getKeys(keyword);
  let keyIdx = 0;
  return message.split('').map(char => {
    if (/[a-z]/i.test(char)) {
      let boundLetter = /[a-z]/.test(char) ? 'z' : 'Z';
      char = shiftLetter(char, keys[keyIdx], boundLetter);
      keyIdx = (keyIdx + 1) % keys.length;
    }
    return char;
  }).join('');
}

function shiftLetter(char, key, boundLetter) {
  const NUM_LETTERS = 26;
  let boundCode = boundLetter.charCodeAt();
  let newCode = char.charCodeAt() + key;
  for (; newCode > boundCode; newCode -= NUM_LETTERS) {}
  return String.fromCharCode(newCode);
}

function getKeys(keyword) {
  return keyword.toLowerCase()
                .replace(/[^a-z]/ig, '')
                .split('')
                .map(char => ALPHABET.indexOf(char));
}

p(vigenereEncrypt("Pineapples don't go on pizzas!", "meat")); // "Bmnxmtpeqw dhz'x gh ar pbldal!"
p(vigenereEncrypt("Pineapples don't go on pizzas!", "a")); // "Pineapples don't go on pizzas!"
p(vigenereEncrypt("Pineapples don't go on pizzas!", "Aa")); // "Pineapples don't go on pizzas!"

p(vigenereEncrypt("Dog", "Rabbit")); // "Uoh"
