/*
- input: 
  - an integer representing the number of digits of a fib number
- output:
  - an integer that returns the first index of a fib number with the input number of digits
- explicit requirements:
  - the first two numbers are `1` by definition
  - each subsequent number is the sum of the two previous numbers
  - the argument is always an integer greater than or equal to `2`.
- implicit requirements:
  - use BigInt integers in the solution.
- algorithm:
  - declare firstNum to 1 and secondNum to 1
  - declare index to 2
  - loop until the length of secondNum is equal to the integer passed in
*/

function findFibonacciIndexByLength(numDigits) {
  let num1 = 1n;
  let num2 = 1n;
  let idx = 2n;
  
  for (; numberOfDigits(num2) < numDigits; idx += 1n) {
    [num1, num2] = [num2, num1 + num2];
  }
  
  console.log(idx);
}

function numberOfDigits(num) {
  return String(num).length;
}

findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.