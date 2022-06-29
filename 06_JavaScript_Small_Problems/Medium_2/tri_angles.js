/*
- requirements:
  - a triangle is `right` when one angle is 90 degrees
  - a triangle is `acute` when all three angles are less than 90 degrees
  - a trianlge is `obtuse` when one angle is larger than 90 degrees
  - the angles of a valid triangle always sum to 180 degrees
  - all angles must be greater than 0
  - all arguments are valid integers
- input:
  - 3 angles
- output:
  - 'acute', 'right', 'obtuse', or 'invalid'
- data structure:
  - an array of the three angles
- algorithm:
  - declare an array of the three angles
  - if all anlges are > 0 && if the angles sum to 180
    - return 'right' if one angle is 90
    - return 'obtuse' if one angle is greater than 90
    - else return `acute`
*/
let p = arg => console.log(arg);

function triangle(a1, a2, a3) {
  let angles = [a1, a2, a3];
  if (!validTriangle(angles)) return 'invalid';
  return triangleType(angles);
}

function validTriangle(angles) {
  return angles.every(a => a > 0) &&
         angles.reduce((s, a) => s + a) === 180;
}

function isRight(angles) {
  return angles.includes(90);
}

function isObtuse(angles) {
  return Math.max(...angles) > 90;
}

function triangleType(angles) {
  if (isRight(angles)) return 'right';
  return isObtuse(angles) ? 'obtuse' : 'acute';
}

p(triangle(60, 70, 50));       // "acute"
p(triangle(30, 90, 60));       // "right"
p(triangle(120, 50, 10));      // "obtuse"
p(triangle(0, 90, 90));        // "invalid" -> can't have 0 as an angle
p(triangle(50, 50, 50));       // "invalid" -> doesn't add up to 180
p(triangle(-10, 100, 90));       // "invalid" -> can't have -10 as an angle