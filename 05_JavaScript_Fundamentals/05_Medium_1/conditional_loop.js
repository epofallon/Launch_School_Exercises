let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  }
  i += 1;
}
// 0 infinitely, because we have the only incementation of `i` hidden in an else statement
// so when the if branch is executed, i doesn't get incremented and we get stuck never incrementing.