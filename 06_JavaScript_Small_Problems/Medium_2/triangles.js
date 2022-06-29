/*
=== Understand the Problem ===
- 3 types of triangles:
  - Equilateral: all three sides equal length
  - Isosceles: two sides equal length and the third is different
  - Scalene: all three sides different lengths
- requirements:
  - the sum of the length of the two shorter sides must be greater than the length of the largest side
  - every side must have a length greater than 0
  - input nubmbers are not always integers (can be decimal numbers)
  - input numbers should not be NaN, Infinity, or -Infinity
- input: three numbers represeneting the length of the 3 sides
- output: a string representing if the triangle is 'equilateral', 'isosceles', 'scalene', or 'invalid'
- questions:
  - do we need to account for invalid numerical inputs: `NaN`, +\- Infinity
- data structure:
  - an array of sides will allow us to analize the data by iterating through it
- algorithm:
  - collect the three numbers into an array
  - check for a valid triagle (if not return invalid)
    - if any side is 0, NaN, Infinity, or -Infinity return false
    - if the largest side is bigger than the sum of the two smaller sides return false
    - else return true
  - determine number of unique sides
  - when 1 return equilateral
  - when 2 return isosceles
  - when 3 return scalene
*/
let p = arg => console.log(arg);

function triangle(s1, s2, s3) {
  let sides = [s1, s2, s3];
  if (invalidTriangle(sides)) return 'invalid';
  
  return triangleType(sides);
}

function triangleType(sides) {
  let uniqueSides = sides.reduce((unique, side) => {
    if (!unique.includes(side)) unique.push(side);
    return unique;
  }, []);

  switch (uniqueSides.length) {
    case 1: return 'equilateral';
    case 2: return 'isosceles';
    case 3: return 'scalene';
  }
}

function invalidTriangle(sides) {
  let invalidNums = [NaN, Infinity, -Infinity, 0];
  if (invalidNums.some(num => sides.includes(num))) return true;

  let smallSidesSum = sides.sort((a, b) => a - b)
                           .slice(0, 2)
                           .reduce((sum, num) => sum + num);
  return smallSidesSum <= Math.max(...sides);
}

p(triangle(3, 3, 3));        // "equilateral"
p(triangle(3, 3, 1.5));      // "isosceles"
p(triangle(3, 4, 5));        // "scalene"
p(triangle(0, 3, 3));        // "invalid"
p(triangle(3, 1, 1));        // "invalid"
p(triangle(3, 1, NaN));      // "invalid"
p(triangle(3, 2, Infinity)); // "invalid"
p(triangle(3, 2, -Infinity)); // "invalid"