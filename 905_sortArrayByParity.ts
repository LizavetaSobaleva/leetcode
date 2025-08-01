function sortArrayByParity(nums: number[]): number[] {
  if (nums.length <= 1) return nums;
  const even: number[] = [];
  const odd: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) even.push(nums[i]);
    else odd.push(nums[i]);
  }

  return [...even, ...odd];
}

console.log(sortArrayByParity([3, 1, 2, 4]));
