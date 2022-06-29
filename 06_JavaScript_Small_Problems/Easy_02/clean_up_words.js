function cleanUp(string) {
  return string.replace(/[^a-z]+/ig, ' ');
}

console.log(cleanUp("---what's my +*& line?") === " what s my line ");