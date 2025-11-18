function kLengthApart(nums: number[], k: number): boolean {
  const dist: number[] = [];
  let start = nums.indexOf(1);
  let count = 0;

  for (let i = start + 1; i < nums.length; i++) {
    if (nums[i] === 1) {
      dist.push(count);
      count = 0;
    } else count++;
  }

  for (let d of dist) {
    if (d < k) return false;
  }

  return true;
}

console.log(kLengthApart([1, 0, 0, 0, 1, 0, 0, 1], 2));
