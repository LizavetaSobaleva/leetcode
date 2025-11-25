function createTargetArray(nums: number[], index: number[]): number[] {
  const n = nums.length;
  const arr: number[] = [];

  for (let i = 0; i < n; i++) {
    const num = nums[i];
    const idx = index[i];

    arr.splice(idx, 0, num);
  }

  return arr;
}

console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]));
