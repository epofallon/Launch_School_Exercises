let rlSync = require('readline-sync');

let billAmount = Number(rlSync.question('What is the bill? '));
let tipPercent = Number(rlSync.question('What is the tip percentage? ')) / 100;

let tipAmount = billAmount * tipPercent;

console.log('');

console.log(`The tip is $${tipAmount.toFixed(2)}`);
console.log(`The total is $${(billAmount + tipAmount).toFixed(2)}`);