let rlSync = require('readline-sync');

function getNum(prompt) {
  return Number(rlSync.question(prompt));
}

let age = getNum('What is your age? ');
let retireAge = getNum('At what age would you like to retire? ');
let currentYear = (new Date()).getFullYear();
let retireYear = currentYear + (retireAge - age);

console.log(`It's ${currentYear}. You will retire in ${retireYear}.`);
console.log(`You have only ${retireAge - age} years of work to go!`);