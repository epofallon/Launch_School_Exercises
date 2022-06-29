/*
- Algorithm
  -
*/

function countOccurrences(arr) {
  let occurrences = {};
  
  arr.forEach(word => {
    occurrences[word] = occurrences[word] || 0;
    occurrences[word] += 1;
  });
  
  Object.keys(occurrences).forEach(word => {
    console.log(`${word} => ${occurrences[word]}`)
  })
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2