function numberOfMatches(n: number): number {
  let matches = 0;

  while (n > 1) {
    matches += Math.floor(n / 2);
    n = n % 2 ? Math.floor(n / 2) + 1 : n / 2;
  }
  return matches;
}

console.log(numberOfMatches(14));
