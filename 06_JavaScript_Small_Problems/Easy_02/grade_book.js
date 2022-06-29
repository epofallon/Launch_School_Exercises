function getGrade(score1, score2, score3) {
  let avgScore = (score1 + score2 + score3) / 3;
  
  return getLetterGrade(avgScore);
}

function getLetterGrade(avgScore) {
  let letterGrade = '';
  if (avgScore >= 90) {
    letterGrade = 'A';
  } else if (avgScore >= 80) {
    letterGrade = 'B';
  } else if (avgScore >= 70) {
    letterGrade = 'C';
  } else if (avgScore >= 60) {
    letterGrade = 'D';
  } else {
    letterGrade = 'F';
  }
  
  return letterGrade;
}

console.log(getGrade(50, 50, 95));    // "D"
console.log(getGrade(95, 90, 93));    // "A"