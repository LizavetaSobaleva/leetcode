function countConsistentStrings(allowed: string, words: string[]): number {
  const allowedSet = new Set(allowed);
  let count = 0;

  for (const word of words) {
    let valid = true;
    for (let c of word) {
      if (!allowedSet.has(c)) {
        valid = false;
        break;
      }
    }
    if (valid) count++;
  }

  return count;
}

console.log(
  countConsistentStrings("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"])
);
