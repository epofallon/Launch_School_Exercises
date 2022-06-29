"use strict";
/*
=== Understand the Problem ===
- notes:
  - a bank of switches numbered 1 to n.
  - every switch is connect to a light that is initially off
  - you walk down the row of switches and toggle every one of them
  - on a second pass you toggle the even switches
  - on a third pass you toggle switches that are multiples of 3
  - you repeate this process until you've done `n` passes
- input:
  - an integer that represents the number of switches
    - will also represent the number of passes
- output:
  - an array of integers
    - the integers represent the lights that are on after all the passes are complete.
- explicit requirements:
  - toggle switches that are divisible by the current pass
- implicit requirements:
  - switches that remain on are the perfect squares that are less than or equal to the input number of ligths
- questions:
  - do we need to account for 0 lights?
=== Examples / Test Cases ===
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] % 1
[1, 3, 5, 7, 9, 11] % 2
[1, 5, 6, 7, 11] % 3
[1, 4, 5, 6, 7, 8, 11] % 4
[1, 4, 6, 7, 8, 10, 11] % 5
[1, 4, 7, 8, 10, 11] % 6
[1, 4, 8, 10, 11] % 7
[1, 4, 10, 11] % 8
[1, 4, 9, 10, 11] % 9
[1, 4, 9, 11] % 10
[1, 4, 9] % 11
=== Data Structures ===
- input: an integer
- manage a list of lights as an array of numbers
- requirements:
=== Algorithm ===
- iterating from 1
*/
let p = arg => console.log(arg);

function lightsOn(numLights) {
  return Object.keys([...Array(numLights)])
               .map(num => Number(num) + 1)
               .filter(num => Math.sqrt(num) % 1 === 0);
}


p(lightsOn(5)); // [1, 4]
p(lightsOn(100)); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
p(lightsOn(11)); // [1, 4, 9]
p(lightsOn(0));

