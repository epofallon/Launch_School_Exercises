function wordSizes(string) {
  let counts = {};
  let words = string.split(' ');
  
  for (let idx = 0; idx < words.length; idx += 1) {
    
    let length = String(words[idx].replace(/[^a-z]/ig, '').length);
    
    if (length === '0') continue;
    
    counts[length] = counts[length] || 0;
    counts[length] += 1;
  }
  
  return counts;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}