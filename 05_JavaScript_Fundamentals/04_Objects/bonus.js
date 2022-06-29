function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}

console.log(calculateBonus(2800, true));               // 1400
console.log(calculateBonus(1000, false));              // 0
console.log(calculateBonus(50000, true));              // 25000

/* Every function in JS has the `arguments` object available, which contains all
the arguments passed to the function. We can access specific arguments by an 
index with 0 being the first argument. */