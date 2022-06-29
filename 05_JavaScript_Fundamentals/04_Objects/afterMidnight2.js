const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

const MILLISECONDS_PER_MINUTE = 60000;

function afterMidnight(timeStr) {
  const date = new Date(`March 29, 2022 ${timeStr}`);
  const midnight = new Date('March 29 2022 00:00');
  const deltaMinutes = (date.getTime() - midnight.getTime()) / MILLISECONDS_PER_MINUTE;

  return deltaMinutes;
}

function beforeMidnight(timeStr) {
  const date = new Date(`March 29, 2022 ${timeStr}`);
  const midnight = new Date('March 30 2022 00:00');
  const deltaMinutes = (midnight.getTime() - date.getTime()) / MILLISECONDS_PER_MINUTE;
  if (deltaMinutes === MINUTES_PER_DAY) {
    return 0;
  }
  
  
  return deltaMinutes;
}

console.log(afterMidnight('00:00'));       // 0
console.log(beforeMidnight('00:00'));      // 0
console.log(afterMidnight('12:34'));       // 754
console.log(beforeMidnight('12:34'));      // 686