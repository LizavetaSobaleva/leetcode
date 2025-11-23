function truncateSentence(s: string, k: number): string {
  const arr = s.split(" ");
  if (arr.length <= k) return s;

  return arr.slice(0, k).join(" ");
}

console.log(truncateSentence("A MugDHEej H", 1));
