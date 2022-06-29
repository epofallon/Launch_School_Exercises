/*
- input: a year as an integer
- output: an integer
  - represents the number of Friday the 13ths in that year.
- requirements:
  - year is greater than 1752
  - calder type will not change between now and then
  - no need to deal lwith invalid number types or invalid input or the input being omitted
- questions:
  - do we need to deal with invalid number types: NaN, +\- Infinity
  - do we need to validate input is a positive integer, or will input always be valid?
  - do we need to deal with the input year being omitted altogether?
- data structure:
  - will need to check each month of the year to see if the 13th day is a friday
  - iteration is needed as a result
  - can use integers to count Friday the 13ths
- algorithm:
  - create a dayCount and set it to 0
  - Iterate from 1 to 12
    - create a new date object with the passed in year, the current month (1 - 12) and 13 as the day 1/13/1986
    - if that date's weekday is 5
      - increment dayCount
  - return dayCount
*/
function fridayThe13ths(year) {
  let FRIDAY = 5;
  let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  
  return months.filter(month => {
    return (new Date(`${month}/13/${year}`)).getDay() === FRIDAY;
  }).length;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
console.log(fridayThe13ths(2000));      // 1