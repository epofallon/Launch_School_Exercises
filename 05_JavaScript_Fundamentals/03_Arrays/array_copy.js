let myArray = [1, 2, 3, 4];
const myOtherArray = myArray;
const another = myArray.slice();
const again = Array.from(myArray);

myArray.pop();
console.log(myArray);
console.log(myOtherArray); // [1, 2, 3];
console.log(another); // [1, 2, 3];
console.log(again); // [1, 2, 3];

myArray = [1, 2];
console.log(myArray);
console.log(myOtherArray); // [1, 2, 3];
console.log(another); // [1, 2, 3];
console.log(again); // [1, 2, 3];