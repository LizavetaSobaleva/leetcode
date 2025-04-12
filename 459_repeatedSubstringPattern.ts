function repeatedSubstringPattern(s: string): boolean {
  const l = s.length;

  for (let i = 1; i <= l / 2; i++) {
    const substring = s.slice(0, i);
    if (substring.repeat(l / i) === s) return true;
  }

  return false;
}
