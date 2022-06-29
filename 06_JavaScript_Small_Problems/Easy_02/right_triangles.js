/*
- input: an integer representing the number of rows to log and the length of each row
- output: a string row
- algorithm:
  - iterate the number of times equal to the length
    - output a concatenated string of
      - (length - idx) for whitespace
      - idx for starts
*/
function triangle(length) {
  for (let idx = 1; idx <= length; idx += 1) {
    let spaces = repeateChar(' ', length - idx);
    let stars = repeateChar('*', idx);
    console.log(spaces + stars);
  }
}

function repeateChar(char, times) {
  let repeatedChar = '';
  
  for (let idx = 1; idx <= times; idx += 1) {
    repeatedChar += char;
  }
  
  return repeatedChar;
}

triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********