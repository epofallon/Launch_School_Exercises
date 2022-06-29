let rlSync = require('readline-sync');

let inputNum = Number(rlSync.question('Please eneter an integer greater than 0: '));
let sumOrProduct = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

let totalNum = (sumOrProduct === 's') ? 0 : 1;

for (let idx = 1; idx <= inputNum; idx += 1) {
  if (sumOrProduct === 's') {
    totalNum += idx;
  } else {
    totalNum *= idx;
  }
}

if (sumOrProduct === 's') {
  console.log(`The sum of the integers between 1 and ${inputNum} is ${totalNum}.`);
} else {
  console.log(`The product of the integers between 1 and ${inputNum} is ${totalNum}.`)
}