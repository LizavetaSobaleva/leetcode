function wordSubsets(words1: string[], words2: string[]): string[] {
  const result = [];

  const mergeMaxFrequencies = (words: string[]): Map<string, number> => {
    const map = new Map<string, number>();

    for (let word of words) {
      const wordMap = createHashmap(word);

      for (let [letter, freq] of wordMap.entries()) {
        map.set(letter, Math.max(map.get(letter) ?? 0, freq));
      }
    }

    return map;
  };

  const createHashmap = (word: string): Map<string, number> => {
    const map = new Map<string, number>();

    for (let char of word) {
      map.set(char, (map.get(char) ?? 0) + 1);
    }

    return map;
  };

  const isWordHasSubset = (
    wordMap: Map<string, number>,
    subsetMap: Map<string, number>
  ): boolean => {
    for (let letter of subsetMap.keys()) {
      if (
        !wordMap.has(letter) ||
        wordMap.get(letter)! < subsetMap.get(letter)!
      ) {
        return false;
      }
    }
    return true;
  };

  const subsetMap = mergeMaxFrequencies(words2);

  for (let word of words1) {
    const wordMap = createHashmap(word);

    if (isWordHasSubset(wordMap, subsetMap)) {
      result.push(word);
    }
  }

  return result;
}

console.log(
  wordSubsets(
    ["amazon", "apple", "facebook", "google", "leetcode"],
    ["ee", "o"]
  )
);
