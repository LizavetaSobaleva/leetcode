function nextGreatestLetter(letters: string[], target: string): string {
  let start = 0;
  let end = letters.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (target >= letters[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  if (start === letters.length) return letters[0];
  else return letters[start];
}

console.log(nextGreatestLetter(["c", "f", "j"], "a"));
