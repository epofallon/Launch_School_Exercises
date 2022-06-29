- notes:
  - Fibonacci lastTwo
    F(1) = 1
    F(2) = 1
    F(3) = 2
    F(4) = 3
    F(5) = 5
    F(6) = 8
    F(n) = F(n - 1) + F(n - 2) when n > 2
  - recursive funcitons
    - call themselves at least once
    - has a halting condition
    - the result of a recursive call is used in the previous call
- requirements:
  - use a recursive function to calculate a fibonacci number
  - the first and second number in the fibonacci lastTwo are 1
- input: a number `n` representing the place of the nth number in the fibonacci lastTwo
- output: a number the `nth` number in the fibonacci lastTwo
- data structure:
  - recursively call a function with numbers
    - no need to store data outside of the current numbers for the current function invocation
- questions:
  - do we need to account of `NaN`, `Infinity`, `-Infinity`, `0` & negative numbers?
- algorithm:
  - if the number passed in is less than or equal to 2 -> return 1
  - else return the result of invoking the function with the number - 1 plus invoking the function with the number - 2
- procedural algorithm:
  - start with an array [1, 1]
  - iterate from 3 to the number passed in
    - reassign the array to element 1, element 1 + element 0
  - return the last number
*/
let p = arg => console.log(arg);
function fibonacci(n) {
  // return n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
  let lastTwo = [1, 1];
  for (let i = 3; i <= n; i += 1) {
    lastTwo = [lastTwo[1], lastTwo[1] + lastTwo[0]];
  }
  return lastTwo[1];
}


p(fibonacci(1));       // 1
p(fibonacci(2));       // 1
p(fibonacci(3));       // 2
p(fibonacci(4));       // 3
p(fibonacci(5));       // 5
p(fibonacci(12));      // 144
p(fibonacci(20));      // 6765