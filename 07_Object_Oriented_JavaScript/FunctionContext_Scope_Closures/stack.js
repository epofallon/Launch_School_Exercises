/*
A stack is a compound data type like an array, but the stack has a strict first in last out rule.
Create a function `newStack`, that, when called, returns a stack object with three methods:
- push:
  - takes a value and appends it to the stack
- pop:
  - removes and returns the last element from the stack
- printStack:
  - logs each remaining element of the stack on its own line, starting with the item least recently added and ending with the item that was most recently added.
- use an array to internally represent the stack.
- Make sure the array is not accessible from outside the methods.
*/
function newStack() {
  let stack = [];
  return {
    push(value) {
      stack.push(value);
    },
    pop() {
      return stack.pop();
    },
    printStack() {
      stack.forEach(value => console.log(value));
    },
  }
}

let myStack = newStack();
console.log(myStack);
myStack.push('hello');
myStack.push('world');
myStack.push(5);
myStack.printStack()
console.log(myStack.pop());
myStack.printStack()
