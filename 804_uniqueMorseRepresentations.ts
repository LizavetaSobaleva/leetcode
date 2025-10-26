function uniqueMorseRepresentations(words: string[]): number {
  const morse: string[] = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];

  const unique = new Set<string>();

  for (const word of words) {
    let code = "";

    for (const l of word) {
      let index = l.charCodeAt(0) - 97;
      code += morse[index];
    }
    unique.add(code);
  }

  return unique.size;
}

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));
