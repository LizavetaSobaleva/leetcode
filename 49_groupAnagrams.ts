function groupAnagrams(strs: string[]): string[][] {
  const anagrams: Map<string, string[]> = new Map();

  for (let str of strs) {
    const sortedStr = str.split("").sort().join("");

    if (anagrams.has(sortedStr)) {
      anagrams.get(sortedStr)!.push(str);
    } else {
      anagrams.set(sortedStr, [str]);
    }
  }

  return [...anagrams.values()];
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
