/*
- input: a floating point number
  - an angle between 0 and 360 degrees
- output: a string
  - represents the angle in degrees, minutes, seconds
  - include °, ', & " for degrees, minutes, seconds
  - there are 60 minutes in a degree
  - there are 60 seconds in a minute
- algorithm:
  - let degrees = the floor of the angle
  - let minutes = the remainder of the angle
*/
const MIN_IN_DEG = 60;
const SEC_IN_MIN = 60;

function dms(angle) {
  angle = validAngle(angle);
  
  let degs = Math.floor(angle);
  
  angle = (angle - degs) * MIN_IN_DEG;
  let mins = Math.floor(angle);
  
  angle = (angle - mins) * SEC_IN_MIN;
  let secs = Math.floor(angle);
  
  return `${degs}°${padZero(mins)}'${padZero(secs)}"`;
}

function padZero(num) {
  return num > 9 ? String(num) : '0' + String(num);
}

const DEGS_IN_CIRCLE = 360;

function validAngle(angle) {
  while (angle < 0 || angle > 360) {
    if (angle < 0) {
      angle += DEGS_IN_CIRCLE;
    } else if (angle > 0) {
      angle -= DEGS_IN_CIRCLE;
    }
  }
  
  return angle;
}


console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
console.log(dms(-1));   // 359°00'00"
console.log(dms(400));  // 40°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 300°00'00"