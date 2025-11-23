function balancedStringSplit(s: string): number {
  if (s.length <= 3) return 1;

  let l = 0;
  let r = 0;
  let counter = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "L") l++;
    else r++;

    if (l === r) {
      counter++;
      l = 0;
      r = 0;
    }
  }
  return counter;
}
