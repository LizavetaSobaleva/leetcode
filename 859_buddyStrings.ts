function buddyStrings(s: string, goal: string): boolean {
  if (s.length !== goal.length) return false;

  const arr: string[][] = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) arr.push([s[i], goal[i]]);
  }

  if (s === goal && s.length !== new Set(s).size) return true;
  if (arr.length !== 2) return false;
  if (arr[0][0] === arr[1][1] && arr[0][1] === arr[1][0]) return true;

  return false;
}

console.log(buddyStrings("aa", "aa"));
