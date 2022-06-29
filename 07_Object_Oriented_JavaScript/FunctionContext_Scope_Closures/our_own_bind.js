/* you pass a context object to the `bind` method and it returns a new function that is essentially the same function but hard-bound to the context object supplied.

Create a myBind function that accets 1) the function to bind, 2) the context object, and returns a new function that's har-bound to the padded in contet object.*/

function myBind(func, context, ...args1) {
  return function(...args2) {
    return func.apply(context, args1.concat(args2));
  }
}

function addNumbers(a, b) {
  return a + b;
}

const addFive = myBind(addNumbers, null, 5);
console.log(addFive(10));
/*
Here we return a new function that simply invokes the passed in function with a specific context that was also passed in.
*/