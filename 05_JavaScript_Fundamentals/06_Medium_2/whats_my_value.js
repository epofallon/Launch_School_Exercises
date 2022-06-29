const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
console.log(array.length); // => 3
console.log(Object.keys(array).length); // => 4

array[-2] = 'Watermelon';
console.log(array.length); // => 3
console.log(Object.keys(array).length); // => 5
// An Array object's `length` property is always numerically 1 greater than the largest index.
// indexes are properties where they property name is a non-negative integer.
// when we attempt to add elements in an array with a property name other than
// a non-negative integer, those are added as properties that don't count as elements.
// that's why the array length remains unchange, but the number of keys on the Array
// object changes when we add a new element.