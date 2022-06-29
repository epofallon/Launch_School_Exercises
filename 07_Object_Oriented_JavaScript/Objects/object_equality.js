/*
- inputs: two objects
- outputs: true or false
  - true if the objects have the same key/value pairs
- requirements:
  - objects don't have the same number of properties
  - objects can have the same number of properties, but those properties can have different names.
  - objects can be empty
- data structure:
  - an array of unique keys from the object
- algorithm:
  - get an array of the unique keys
  - iterate through the array of unique keys
    - if the array of keys from either object doesn't include the current key
      - return false
  - return true
*/
function objectsEqual(obj1, obj2) {
  let k1 = Object.keys(obj1);
  let k2 = Object.keys(obj2);

  let keys = k1.concat(k2).reduce((unique, key) => {
    return unique.includes(key) ? unique : unique.concat(key)
  }, []);

  for (key of keys) {
    if (!k1.includes(key) || !k2.includes(key)) return false;
    if (obj1[key] !== obj2[key]) return false;
  }



  return true;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false
console.log(objectsEqual({a: 'foo'}, {a: 'fOo'}));                      // false
