/*
- notes:
  - Fibonacci lastTwo
    F(1) = 1
    F(2) = 1
    F(3) = 2
    F(4) = 3
    F(5) = 5
    F(6) = 8
    F(n) = F(n - 1) + F(n - 2) when n > 2
- requirements:
  - use memoization to calculate a fibonacci number
    - memoization involves saving a computer value for future reuse, instead of computing it from scratch every time it's needed.
  - the first and second number in the fibonacci lastTwo are 1
- input: a number `n` representing the place of the nth number in the fibonacci lastTwo
- output: a number the `nth` number in the fibonacci lastTwo
- data structure:
  - an array to store calculated values starts as [0, 1, 1] so indexes line up with place in the fibonacci sequence
- questions:
  - do we need to account of `NaN`, `Infinity`, `-Infinity`, `0` & negative numbers?
- algorithm:
  - declare an array to [0, 1, 1]
  - if the array has a value for the `nth` fibNum, use it
  - else calculate it recursively & add it to the array
*/
let p = arg => console.log(arg);

let fibs = [0, 1, 1];
function fibonacci(n) {
  if (fibs[n] === undefined) {
    fibs[n] = fibonacci(n - 1) + fibonacci(n - 2);
  }
  return fibs[n];
}

p(fibonacci(1));       // 1
p(fibonacci(2));       // 1
p(fibonacci(3));       // 2
p(fibonacci(4));       // 3
p(fibonacci(5));       // 5
p(fibonacci(12));      // 144
p(fibonacci(20));      // 6765