let rlSync = require('readline-sync');

let inputStr = rlSync.question("Please enter a prhase: ");
let alphabeticStr = inputStr.replace(/[^a-z]/ig, '');

console.log(
  `There are ${alphabeticStr.length} alphabetic characters in '${inputStr}'.`
);




// Please enter a phrase: walk
// // console output
// There are 4 characters in "walk".

// Please enter a phrase: walk, don't run
// // console output
// There are 15 characters in "walk, don't run".