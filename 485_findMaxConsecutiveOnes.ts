function findMaxConsecutiveOnes(nums: number[]): number {
  let result = 0;
  let repeat = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      repeat += 1;
    } else {
      result = Math.max(result, repeat);
      repeat = 0;
    }
  }

  return Math.max(result, repeat);
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
