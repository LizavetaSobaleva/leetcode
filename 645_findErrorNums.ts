function findErrorNums(nums: number[]): number[] {
  const seen = new Set<number>();
  let duplicate = 0;
  let actualSum = 0;
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;

  for (let num of nums) {
    if (seen.has(num)) {
      duplicate = num;
    } else {
      seen.add(num);
      actualSum += num;
    }
  }

  const missing = expectedSum - actualSum;

  return [duplicate, missing];
}

console.log(findErrorNums([1, 2, 2, 4]));
console.log(findErrorNums([1, 1]));
