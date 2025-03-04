function detectCapitalUse(word: string): boolean {
  const firstLetter = word.at(0);

  if (firstLetter === firstLetter?.toUpperCase()) {
    word = word.slice(1);
    if (word === word.toUpperCase() || word === word.toLowerCase()) return true;
  } else if (word === word.toLowerCase()) return true;

  return false;
}

console.log(detectCapitalUse("HELLO"));
console.log(detectCapitalUse("hello"));
console.log(detectCapitalUse("Hello"));
console.log(detectCapitalUse("HeLLo"));
