function commonChars(words: string[]): string[] {
  const result: string[] = [];

  const freq = new Map<string, number>();
  for (const char of words[0]) freq.set(char, (freq.get(char) || 0) + 1);

  for (let i = 1; i < words.length; i++) {
    const map = new Map<string, number>();
    for (const char of words[i]) map.set(char, (map.get(char) || 0) + 1);

    for (const [ch, _] of freq) {
      if (!map.has(ch)) {
        freq.delete(ch);
      } else {
        freq.set(ch, Math.min(freq.get(ch)!, map.get(ch)!));
      }
    }
  }

  for (const [char, count] of freq) {
    for (let i = 0; i < count; i++) result.push(char);
  }

  return result;
}

console.log(commonChars(["bella", "label", "roller"]));
