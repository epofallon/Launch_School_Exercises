// compute the sum of all numbers between 1 and some other number (inclusive)
// that are multiples of `3` or `5`.
function isMultiple(number, divisor) {
  return number % divisor === 0;
}


function multisum(maxNum) {
  let sum = 0;
  
  for (let currentNum = 1; currentNum <= maxNum; currentNum += 1) {
    if (isMultiple(currentNum, 3) || isMultiple(currentNum, 5)) {
      sum += currentNum;
    }
  }
  
  return sum;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168