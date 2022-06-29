let rlSync = require('readline-sync');

function numSuffix(num) {
  if (num === 3) {
    return 'rd';
  } else if (num > 10 && num < 20) {
    return 'th';
  } else if (num % 10 === 1) {
    return 'st';
  } else if (num % 10 === 2) {
    return 'nd';
  } else {
    return 'th';
  }
}

function isIncluded(arr, val) {
  return arr.some((num) => num > val);
  
  // for (let i = 0; i < arr.length; i += 1) {
  //   if (arr[i] > val) {
  //     return true;
  //   }
  // }

  // return false;
}

let numbers = [];

for (let idx = 1; idx < 6; idx += 1) {
  let numString = String(idx) + numSuffix(idx);
  numbers.push(Number(rlSync.question(`Enter the ${numString} number: `)));
}

let lastNum = Number(rlSync.question('Enter the last number: '));

if (isIncluded(numbers, lastNum)) {
  console.log(`The number ${lastNum} appears in [${numbers.join(', ')}].`);
} else {
  console.log(`The number ${lastNum} does not appears in [${numbers.join(', ')}].`);
}