const myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  let sum = 0;
  let count = 0;

  for (let i = -2; i < array.length; i += 1) {
    sum += array[i];
    count += 1;
  }

  return sum / count;
}

console.log(average(myArray));