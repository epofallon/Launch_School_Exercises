/*
- input: a string sentence
- output: a string sentence with the words 'one', 'two', 'three', ..., converted to 1, 2, 3, ..., etc.
- explicit requirements:
  - convert the words ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'] to [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
- implicit requirements:
  - need to anticipate any case
  - a string with no numbers is returned as is
  - this includes an empty string
  - number words shouldn't be a part of a larger word
    - number do need to be accounted for when there is a sentence ending
- questions:
  - Do we need to handle case? -> yes
  - Do we need to handle non-string input? -> no
  - Should we exclude a number that is part of a larger word? -> 'Bone' !== 'B1'
- data structure:
  - split the string at word boundaries to make an array of strings
  - requirements: the array ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  will enable us to convert to numbers using the index
- agorithm:
  - declare the digits array and freeze it
  - split the string into an array of strings at every word boundary
  - map through the array of strings
    - if the lowercase version of the current string is a number word
      - transform any strings that represent numbers
    - else return the string as is
  - join back into a string and return

  - declare the digits array and freeze It
  - iterate through the array of digits
    - initialize a regex pattern for the current digit
    - replace the occurence of each number in the string with the index of that number
  - return the string
*/
let p = arg => console.log(arg);

function wordToDigit(inputStr) {
  let digits = Object.freeze(['zero', 'one', 'two', 'three', 'four', 'five',
                              'six', 'seven', 'eight', 'nine']);
  
  return inputStr.replace(/[a-z]+/ig, match => {
    return digits.includes(match.toLowerCase()) ? digits.indexOf(match.toLowerCase()) : match;
  });

  // digits.forEach((digit, idx) => {
  //   let regex = new RegExp(`\\b${digit}\\b`, 'ig');
  //   inputStr = inputStr.replace(regex, idx)
  // })
  // return inputStr;

  // return inputStr.split(/\b/).map(str => {
  //   if (digits.includes(str.toLowerCase())) {
  //     return digits.indexOf(str.toLowerCase());
  //   } else {
  //     return str;
  //   }
  // }).join('');
}
// happy path conversion
p(wordToDigit('Please call me at five five one two three four. Thanks.')); // "Please call me at 5 5 1 2 3 4. Thanks."

// any case
p(wordToDigit('One, tWo, THREE, four')); // "1, 2, 3, 4"

// no numbers
p(wordToDigit('Hello world! My name is Gene and I want to be a software engineer.')); // "Hello world! My name is Gene and I want to be a software engineer."
p(wordToDigit('')); // ""

// exclude numbers that are parts of larger words
p(wordToDigit("That's a cool stone! The time? It's six o'clock.")); // "That's a cool stone! The time? It's 6 o'clock".