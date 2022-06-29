/*
- input: a text template
  - how to specify words to be replaced
- notes:
  - plug in a selection of randmoized nouns, verbs, adjectives and adverbs into the template
- output:
  - a string
    - words plugged in to the template
- requirements:
  - you can build lists of nouns, verbs, adjectives & adverbs directly into your program
  - place a random word of the correct type into the text in each spot
  - locate spots in template that need a word added
  - replace that spot in the string with a random word of choice
- edge cases:
  - empty string
  - string with no templates
  - invalid template reference
- data structure:
  - an object of lists of types of words for the words we need to randomly access
  - converting the string to an array of words will be useful for handling each word individually
- algorithm:
  - initialize the words object
  - split the template string into an array of words
  - map through the array of words
    - determine template type (return '' if the word isn't a template)
      - iterate through the template types
        - select the template type found in the word
        - return the first element of the result
    - when a word is a template
      - determine which template type
      - get a random word from that specific list of words
    - if a word isn't a template
      - return as is
*/

function madlibs(template) {
  let wordLists = {
    noun: ['fox', 'dog', 'head', 'leg', 'tail', 'cat', 'mokey', 'boy', 'car', 'cheetah', 'dachsund', 'man'],
    adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
    verb: ['jumps', 'lifts', 'bites', 'licks', 'pats', 'chases'],
    adverb: ['easily', 'lazily', 'noisily', 'excitedly'],
  };
  let words = template.split('&');
  return words.map(word => {
    let wordType = findType(word, Object.keys(wordLists));
    if (wordType) {
      return randomWord(wordLists[wordType]);
    } else {
      return word;
    }
  }).join('');
}

function findType(word, types) {
  if (!/^(noun|verb|adverb|adjective)$/.test(word)) return '';
  return types.filter(type => word === type)[0];
}

function randomWord(wordsArr) {
  let idx = Math.floor(Math.random() * wordsArr.length);
  return wordsArr[idx];
}

// These examples use the following list of replacement texts:
// adjectives: quick lazy sleepy noisy hungry
// nouns: fox dog head leg tail cat
// verbs: jumps lifts bites licks pats
// adverbs: easily lazily noisily excitedly
// ------
let template1 = "The &adjective& brown &noun& &adverb&\n" +
                "&verb& the &adjective& yellow\n" +
                "&noun&, who &adverb& &verb& his" +
                "\n&noun& and looks around.";
console.log(madlibs(template1));
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.
console.log("--------------------");
console.log(madlibs(template1));
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.
console.log("--------------------");
let template2 = "The &noun& &verb& the &noun&'s &noun&.";
console.log(madlibs(template2));      // The "fox" "bites" the "dog"'s "tail".
console.log("--------------------");
console.log(madlibs(template2));      // The "cat" "pats" the "cat"'s "head".
console.log("--------------------");
console.log(madlibs(''));             // ''
console.log("--------------------");
console.log(madlibs("noun went to adverb verb the adjective noun's stuff"));
// noun went to adverb verb the adjective noun's stuff