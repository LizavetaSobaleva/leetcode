function stringMatching(words: string[]): string[] {
  words.sort((a, b) => a.length - b.length);

  const result: string[] = [];

  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (words[j].includes(words[i])) {
        result.push(words[i]);
        break;
      }
    }
  }

  return result;
}

console.log(stringMatching(["mass", "as", "hero", "superhero"]));
