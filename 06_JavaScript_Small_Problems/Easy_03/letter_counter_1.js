/*
- input: a string
- output: an object
  - keys are word lengths
  - values are the number of words that length
- algorithm:
  - declare a result variable to an empty object
  - split the string into an array of words
  - iterate through the array of words
    - declare a string of the length of the current word
    - if the current length is in the object
      - increment its value by 1
    - else
      - add that length to the object and set it's value to 1
  - return the object
*/


function wordSizes(string) {
  let counts = {};
  let words = string.split(' ');
  for (let idx = 0; idx < words.length; idx += 1) {
    let length = String(words[idx].length);
    if (length === '0') continue;
    
    counts[length] = counts[length] || 0;
    counts[length] += 1;
  }
  
  return counts;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}