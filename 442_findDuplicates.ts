function findDuplicates(nums: number[]): number[] {
  if (nums.length === 1) return [];

  const result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const idx = Math.abs(nums[i]) - 1;
    if (nums[idx] < 0) result.push(idx + 1);
    else nums[idx] = -nums[idx];
  }

  return result;
}

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
