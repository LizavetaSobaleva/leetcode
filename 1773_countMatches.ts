function countMatches(
  items: string[][],
  ruleKey: string,
  ruleValue: string
): number {
  let count = 0;
  let ruleIndexes = new Map<string, number>([
    ["type", 0],
    ["color", 1],
    ["name", 2],
  ]);

  for (let i = 0; i < items.length; i++) {
    const j = ruleIndexes.get(ruleKey);
    if (items[i][j!] === ruleValue) count++;
  }

  return count;
}

console.log(
  countMatches(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "lenovo"],
      ["phone", "gold", "iphone"],
    ],
    "type",
    "phone"
  )
);
