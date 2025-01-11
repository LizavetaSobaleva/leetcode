function twoSum(nums: number[], target: number): number[] {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let secondNum = target - nums[i];
    if (map.has(secondNum)) return [map.get(secondNum), i];

    map.set(nums[i], i);
  }
}
