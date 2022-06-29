function doubleConsonants(string) {
  const VOWELS = ['a', 'e', 'i', 'o', 'u'];

  return string.split('').map(char => {
    let downcaseChar = char.toLowerCase();
    
    if (VOWELS.indexOf(downcaseChar)=== -1 && isLetter(downcaseChar)) {
      return char + char;
    } else {
      return char;
    }
    
  }).join('');
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""