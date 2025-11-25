function decompressRLElist(nums: number[]): number[] {
  const list: number[] = [];

  for (let i = 0; i < nums.length; i += 2) {
    const freq = nums[i];
    const val = nums[i + 1];
    list.push(...new Array(freq).fill(val));
  }

  return list;
}

console.log(decompressRLElist([1, 2, 3, 4]));
