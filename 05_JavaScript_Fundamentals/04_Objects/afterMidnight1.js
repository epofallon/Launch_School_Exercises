const MILLISECONDS_PER_MINUTE = 60000;

function timeOfDay(deltaMinutes) {
  let date = new Date('March 29, 2022');
  let newDate = new Date(date.getTime() + (deltaMinutes * MILLISECONDS_PER_MINUTE));
  
  let minutes = date.getMinutes();
  let hours = date.getHours();

  return `${padWithZeroes(hours, 2)}:${padWithZeroes(minutes, 2)}`;
}

function padWithZeroes(number, length) {
  let numberString = String(number);

  while (numberString.length < length) {
    numberString = `0${numberString}`;
  }

  return numberString;
}



console.log(timeOfDay(0));          // "00:00"
console.log(timeOfDay(-3));         // "23:57"
console.log(timeOfDay(35));         // "00:35"
console.log(timeOfDay(-1437));      // "00:03"
console.log(timeOfDay(3000));       // "02:00"
console.log(timeOfDay(800));        // "13:20"
console.log(timeOfDay(-4231));      // "01:29"