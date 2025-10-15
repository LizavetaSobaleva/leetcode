function frequencySort(s: string): string {
  if (s.length <= 2) return s;

  const freqMap = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    freqMap.set(s[i], (freqMap.get(s[i]) || 0) + 1);
  }

  return [...freqMap.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([ch, freq]) => ch.repeat(freq))
    .join("");
}

console.log(frequencySort("loveleetcode"));
