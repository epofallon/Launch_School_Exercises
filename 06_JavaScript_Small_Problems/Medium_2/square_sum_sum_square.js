/*
- notes:
  - comput the difference between:
    - the square of the sum of the first `n` positive integers
    - the sum of the squares of the first `n` positive integers
- input: an integer `n`.
- output: an integer representing the the difference between the sum squared & the squares summed
- requirements:
  - sum integers from 1 to `n` then square that sum
  - square each number from 1 to `n` then sum them
- questions:
  - do we need to account for-> negative numbers -> can be treated as the positive equivalent
                                Nan
                                +\- Infinity
                                fractional numbers -> truncate to an integer
                                non number inputs -> no need to worry
                                Zero -> 0
                                Exteremely large numbers -> let be
- data structure:
  - integers to keep track of sums
  - an array going from 1 to the input number
- algorithm:
  - clean the number
    - round to the nearest integer.
    - get the absolut value.
  - build an array from 1 to `n`
  - sum the numbers, then square that result
  - iterate through the numbers, squaring each, then sum that result
  - sum
    - add up an array of numbers
  - square
    - square the current number
*/
let p = arg => console.log(arg);

function sumSquareDifference(num) {
  if (num === 0) return 0;
  let numbers = getNumbers(1, cleanNumber(num));
  return square(sum(numbers)) - sum(numbers.map(n => square(n)));
}

function cleanNumber(num) {
  return Math.abs(Math.round(num));
}

function getNumbers(start, end) {
  let arr = [];
  for (let i = start; i <= end; i += 1) {
    arr.push(i);
  }
  return arr;
}

function sum(arr) {
  return arr.reduce((s, n) => s + n);
}

function square(num) {
  return num * num;
}

p(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
p(sumSquareDifference(10));     // 2640
p(sumSquareDifference(1));      // 0
p(sumSquareDifference(100));    // 25164150
// negative numbers
p(sumSquareDifference(-3));      // 22
p(sumSquareDifference(-10));     // 2640
p(sumSquareDifference(-1));      // 0
p(sumSquareDifference(-100));    // 25164150
// fractional numbers
p(sumSquareDifference(3.2));     // 22
p(sumSquareDifference(3.5));     // 70
// zero
p(sumSquareDifference(0));