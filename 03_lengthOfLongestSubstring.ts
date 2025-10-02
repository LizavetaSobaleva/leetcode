function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) return 0;
  if (s.length === new Set(s).size) return s.length;

  const map = new Map<string, number>();
  let left = 0;
  let substring = 0;

  for (let right = 0; right < s.length; right++) {
    if (map.has(s[right])) {
      left = Math.max(map.get(s[right])! + 1, left);
    }
    map.set(s[right], right);
    substring = Math.max(substring, right - left + 1);
  }
  return substring;
}

console.log(lengthOfLongestSubstring("abb"));
