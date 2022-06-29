function swapName(name) {
  let spaceIdx = name.lastIndexOf(' ');
  let firstNames = name.slice(0, spaceIdx);
  let lastName = name.slice(spaceIdx + 1);
  return `${lastName}, ${firstNames}`;
  // return name.split(' ').reverse().join(', ');
}

console.log(swapName('Joe Rick Bob Roberts'));    // "Roberts, Joe"