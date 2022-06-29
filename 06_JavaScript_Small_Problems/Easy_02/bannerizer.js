function logInBox(string) {
 let boxLength = string.length + 2;
 const horizontalLine = buildLine(boxLength, '+', '-');
 const emptyLine = buildLine(boxLength, '|');
 
 console.log(horizontalLine);
 console.log(emptyLine);
 console.log(`| ${string} |`);
 console.log(emptyLine);
 console.log(horizontalLine);
}

function buildLine(length, endChar, spaceChar = ' ') {
  let line = '';
  
  for (let idx = 0; idx < length; idx += 1) {
    line += spaceChar;
  }
  
  return endChar + line + endChar;
}


logInBox('To boldly go where no one has gone before.');
logInBox('');