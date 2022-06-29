function penultimate(string) {
  return string.split(' ').slice(-2, -1)[0];
}

console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"

// attempting to use the "index" -2 on `line 2` returns undefined
// this is because the array object does not have a property with the key -2

// to access the second to last word, you'll need to use its index