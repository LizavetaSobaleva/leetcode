function findWords(words: string[]): string[] {
  const rows = [
    new Set("qwertyuiop"),
    new Set("asdfghjkl"),
    new Set("zxcvbnm"),
  ];

  function getRowSet(char: string): Set<string> | undefined {
    return rows.find((set) => set.has(char));
  }

  function isSingleRowWord(word: string): boolean {
    let lowerWord = word.toLowerCase();
    let rowSet = getRowSet(lowerWord[0]);

    return rowSet ? [...lowerWord].every((char) => rowSet.has(char)) : false;
  }

  return words.filter(isSingleRowWord);
}

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));
