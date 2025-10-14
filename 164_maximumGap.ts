function maximumGap(nums: number[]): number {
  if (nums.length < 2) return 0;

  nums.sort((a, b) => a - b);
  let maxGap = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    maxGap = Math.max(maxGap, nums[i + 1] - nums[i]);
  }

  return maxGap;
}

console.log(maximumGap([3, 6, 9, 1]));
