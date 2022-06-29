// leap years occur in years divisible by 4
// unless the year is divisible by 100
// but it is a leap year when divisible by 400

// function isLeapYear(year) {
//   if (year % 400 === 0) {
//     return true;
//   } else if (year % 4 === 0 && year % 100 !== 0) {
//     return true;
//   }
//   return false;
// }

const isGregorianLeapYear = (year) => (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
const isJulianLeapYear = (year) => (year % 4 === 0);

function isLeapYear(year) {
  return (year < 1752) ? isJulianLeapYear(year) : isGregorianLeapYear(year);
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // true
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // true
console.log(isLeapYear(400));       // true