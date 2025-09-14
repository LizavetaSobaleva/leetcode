function toGoatLatin(sentence: string): string {
  const vowels: string = "aeiouAEIOU";
  const ma: string = "ma";

  return sentence
    .split(" ")
    .map((word, i) => {
      if (vowels.includes(word[0])) {
        return word + ma;
      } else {
        return word.slice(1) + word[0] + ma;
      }
    })
    .map((w, i) => w + "a".repeat(i + 1))
    .join(" ");
}

console.log(toGoatLatin("I speak Goat Latin"));
