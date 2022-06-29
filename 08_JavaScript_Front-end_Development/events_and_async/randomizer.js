let callback1 = ()  => console.log(`callback1`);
let callback2 = ()  => console.log(`callback2`);
let callback3 = ()  => console.log(`callback3`);
let callback4 = ()  => console.log(`callback4`);
let callback5 = ()  => console.log(`callback5`);

function randomizer(...funcs) {
  let randTime = () => Math.floor(Math.random() * ((funcs.length * 2000) + 1));
  let count = 0;
  let intervalId = setInterval(() => {
    count += 1;
    console.log(count);
    if (count === funcs.length * 2) clearInterval(intervalId);
  }, 1000);

  funcs.forEach(callback => {
    let millis = randTime();
    setTimeout(() => callback(), millis);
  });
}

randomizer(callback1, callback2, callback3, callback4, callback5);