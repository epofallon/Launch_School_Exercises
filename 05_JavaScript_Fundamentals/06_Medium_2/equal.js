const person = { name: 'Victor' };
const otherPerson = person;

console.log(person === otherPerson);    // false -- expected: true
// equality for objects doesn't compare if two objects have the same values,
// rather it compares if they are the same object. The variables store references to
// objects, and this is what's compared.

// We can see on lines 1 & 2 that we're assigning different objects to the variables
// `person` and `otherPerson` by using two object literals.