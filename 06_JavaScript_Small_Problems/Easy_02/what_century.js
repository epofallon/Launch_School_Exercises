/*
- input: a number representing a year
- output: a string that returns the century number and the appropiate ending
- algorithm
  - getting the right number
    - divide the number by 100
    
*/

function century(year) {
  let centuryNum = Math.floor(year / 100) + 1;
  
  if (year % 100 === 0) {
    centuryNum -= 1;
  }
  
  return String(centuryNum) + centurySuffix(centuryNum);
}

function centurySuffix(century) {
  if (century === 3) {
    return 'rd';
  } else if (century > 10 && century < 20) {
    return 'th';
  } else if (century % 10 === 1) {
    return 'st';
  } else if (century % 10 === 2) {
    return 'nd';
  } else {
    return 'th';
  }
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"