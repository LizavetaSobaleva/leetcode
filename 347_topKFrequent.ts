function topKFrequent(nums: number[], k: number): number[] {
  if (nums.length === 1) return nums;

  const freqMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    freqMap.set(nums[i], (freqMap.get(nums[i]) || 0) + 1);
  }

  const result = [...freqMap.keys()].sort(
    (a, b) => freqMap.get(b)! - freqMap.get(a)!
  );

  return result.slice(0, k);
}

console.log(topKFrequent([1, 2, 1, 2, 1, 2, 3, 1, 3, 2], 2));
