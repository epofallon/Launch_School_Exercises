function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(`Teddy is ${randomBetween(20, 200)} years old!`);