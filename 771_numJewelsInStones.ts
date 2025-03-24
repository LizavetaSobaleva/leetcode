function numJewelsInStones(jewels: string, stones: string): number {
  return stones.split("").filter((c) => jewels.includes(c)).length;
}

console.log(numJewelsInStones("aA", "aAAbbb"));
