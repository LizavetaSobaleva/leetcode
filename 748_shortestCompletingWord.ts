function shortestCompletingWord(licensePlate: string, words: string[]): string {
  let shortestWord: string = "";
  const lettersMap = new Map<string, number>();
  const str: string = licensePlate.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) {
      lettersMap.set(str[i], (lettersMap.get(str[i]) || 0) + 1);
    }
  }

  function isValid(
    map1: Map<string, number>,
    map2: Map<string, number>
  ): boolean {
    for (const [char, freq] of map1) {
      if (!map2.has(char) || map2.get(char)! < freq) return false;
    }
    return true;
  }

  for (const word of words) {
    const wordMap = new Map<string, number>();
    for (let i = 0; i < word.length; i++) {
      wordMap.set(word[i], (wordMap.get(word[i]) || 0) + 1);
    }

    if (!isValid(lettersMap, wordMap)) continue;

    if (!shortestWord || shortestWord.length > word.length) {
      shortestWord = word;
    }
  }
  return shortestWord;
}

console.log(
  shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"])
);
