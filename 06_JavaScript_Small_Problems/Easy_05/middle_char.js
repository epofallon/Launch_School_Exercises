// input => a non-empty string
// output => the middle character(s) of the string
// algorithm =>
// - if the string is an odd length
//   - return the character at Math.floor(str.length / 2)
// - else return the characters at str.slice(str.legnth \ 2 - 1, str.length / 2 + 1)
function centerOf(str) {
  let half = Math.floor(str.length / 2);
  if (str.length % 2 === 0) {
    return str.slice(half - 1, half + 1);
  } else {
    return str[half];
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"