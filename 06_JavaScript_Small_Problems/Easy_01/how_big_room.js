let rlSync = require('readline-sync');

const SQMETERS_TO_SQFEET = 10.7639;

console.log('Are measurements if meters or feet?');
let isMeters = ('meters' === rlSync.prompt());


console.log('Enter the length of the room in meters:');
let length = rlSync.prompt();
length = parseInt(length, 10);

console.log('Enter the width of the room in meters:');
let width = rlSync.prompt();
width = parseInt(width, 10);

let squareMeters = length * width;
let squareFeet = squareMeters * 10.7639;

console.log(
  `The area of the room is ${squareMeters.toFixed(2)} square meters (${squareFeet.toFixed(2)} squareFeet).`
);

