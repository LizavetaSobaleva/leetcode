function findFinalValue(nums: number[], original: number): number {
  const numsSet = new Set<number>(nums);
  let value = original;

  while (numsSet.has(value)) {
    value = value * 2;
  }

  return value;
}

console.log(findFinalValue([5, 3, 6, 1, 12], 3));
