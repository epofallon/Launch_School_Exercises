/*
- input: a string
- output: an object with 3 properties
  - the % of characters that are lowercase
  - the % of characters that are uppercase
  - the % of characters that are neither
- requirements:
  - the string will always contain at least one character
  - percentages are coerced to strings with two decimal places
  - % means the count of a subgroup of characters divided by the total count of characters multiplied by 100
- data structure:
  - input: a string
    - can keep as a string and perform regex
  - output: an object that contains three properties as seen in test cases
  - requirements: 
- algorithm:
  - declare a percentages object

  - count the total number of characters that fit the current pattern
    - if the pattern has no matches assign count to 0
  - divide by the total char count and multiply by 100
  - round and convert to a string
  - add to the percentages object
*/
let p = arg => console.log(arg);

function letterPercentages(str) {
  return {
    lowercase: calculatePercent(str, /[a-z]/g),
    uppercase: calculatePercent(str, /[A-Z]/g),
    neither: calculatePercent(str, /[^a-z]/ig),
  };
}

function calculatePercent(str, pattern) {
  let typeTotal = (str.math(pattern) || []).length;
  let percentTotal = (typeTotal / str.length) * 100;
  return String(percentTotal.toFixed(2));
}

p(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

p(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

p(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
