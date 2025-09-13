function uncommonFromSentences(s1: string, s2: string): string[] {
  const freq: Map<string, number> = new Map();
  const result: string[] = [];

  const arr: string[] = s1.split(" ").concat(s2.split(" "));

  for (const word of arr) {
    freq.set(word, (freq.get(word) || 0) + 1);
  }

  for (const [word, number] of freq) {
    if (number === 1) result.push(word);
  }

  return result;
}

console.log(uncommonFromSentences("this apple is sweet", "this apple is sour"));
