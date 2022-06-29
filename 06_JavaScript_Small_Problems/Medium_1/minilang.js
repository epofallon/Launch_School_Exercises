/*
=== Understand the Problem ===
- a stack can be implemented as an array that uses push to add values and pop to remove values
- a stack and register programming language uses a stack of values
- each operation in a language operates on a register
  - the register isn't part of the stack
- opeartions that require two values pop the top value off the stack, operates on the register and the popped value, then stores the result in the register
- implement a miniature stack-and-register programming language
- input:
  - a string of space separated commands
- output:
  - prints the value of register if the PRINT command is used
  - return value is insignificant
- requirements:
  - stack
    - treated as a last-in/first-out data structure
    - must make sure we don't attempt to pop a value out of an empty stack
    - stack is initialized to an empty array & register is initialized to 0
  - command input
    - needs to check for invalid inputs and terminate a program with an error message if an invalid commant is gived
  - commands:
    - `n` -> a number places a value in the register (the value needs to be converted to an integer)
    - `PUSH` -> places the current value of the register on the stack
    - `ADD` -> pops the top value from the stack and adds it to the register value
    - `SUB` -> pops the top value from the stack and subtracts it from the register value
    - `MULT` -> pops the top value from the stack and multiplies it by the register value
    - `DIV` -> pops the top value from the stack and divides the register by that value
      - result needs to be an integer
    - `REMAINDER` -> pops the top value from the stack and determines the integer remainder
      - result needs to be an integer
    - `POP` removes the topmost item from the stack and places it in the register
    - `PRINT` prints the current value to the register
  - All operations are integer operations
- data structure:
  - commands: string -> an array of commands to iterate through
  - register: a single value (default 0)
  - stack: an array (initialized empty)
  - behaviors: an object of behaviors
- algorithm:
  - minilang:
    - initialize register and stack
    - initialize commands
  - split the script into separate tokens
  - iterate through the tokens
    - if a token is a number
      - convert it to a number an reassign the stack
    - else if the token is found in the commands list
      - if the command is not PUSH or PRINT, check the stack for values
        - if stack is empty issue an error message and terminate
      - execute the command
    - else
      - issue an error message and terminate
*/
function minilang(script) {
  let register = 0;
  let stack = [];
  let commands = {
    PUSH() { stack.push(register) },
    ADD() { register += stack.pop() },
    SUB() { register -= stack.pop() },
    MULT() { register *= stack.pop() },
    DIV() { register = Math.round(register / stack.pop()) },
    REMAINDER() { register = Math.round(register % stack.pop()) },
    POP() { register = stack.pop() },
    PRINT() { console.log(register) },
  };
  
  let tokens = script.split(/\s/g);
  
  for (let i = 0; i < tokens.length; i += 1) {
    let token = tokens[i];

    if (validNumber(token)) {
      register = Number(token);
    } else if (invalidStackAccess(token)) {
      console.log(`ERROR: Cannot perform '${token}' when stack is empty.`);
        return;
    } else if (validCommand(token)) {
      commands[token]();
    } else {
      console.log(`ERROR: '${token}' is not a command.`);
      return;
    }
  }

  function invalidStackAccess(token) {
    return token !== 'PUSH' &&
           token !== 'PRINT' &&
           validCommand(token) &&
           stack.length === 0;
  }

  function validCommand(token) {
    return Object.keys(commands).includes(token);
  }

  function validNumber(token) {
    return /^-?[0-9]+$/.test(token);
  }
}

// minilang('PRINT');
// // 0

// minilang('5 PUSH 3 MULT PRINT');
// // 15

// minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// // 5
// // 3
// // 8

// minilang('5 PUSH POP PRINT');
// // 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// // 5
// // 10
// // 4
// // 7

// minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// // 6

// minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// // 12

// minilang('-3 PUSH 5 SUB PRINT');
// // 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)

minilang('5 PUSH 6 MULT PRINT POP PRINT');
// 30
// ERROR: Cannot perform 'POP' with empty stack

minilang('4 PUSH 5 PUSH 6 DROP PRINT');
// ERROR: 'DROP' is not a command