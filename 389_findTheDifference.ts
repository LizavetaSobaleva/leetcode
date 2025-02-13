function findTheDifference(s: string, t: string): string {
  if (s.length === 0) return t;

  const createHashmap = (word: string): Map<string, number> => {
    const map = new Map<string, number>();

    for (let char of word) {
      map.set(char, (map.get(char) ?? 0) + 1);
    }

    return map;
  };

  let sMap = createHashmap(s);
  let tMap = createHashmap(t);

  for (let char of tMap.keys()) {
    if (tMap.get(char) !== sMap.get(char)) {
      return char;
    }
  }

  return "";
}

console.log(findTheDifference("abcd", "abcde"));
