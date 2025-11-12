function findXSum(nums: number[], k: number, x: number): number[] {
  const answer: number[] = [];
  const freq = new Map<number, number>();

  for (let i = 0; i < k; i++) {
    freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);
  }

  function countXSum(): number {
    if (freq.size <= x) {
      let sum = 0;
      for (const [val, count] of freq.entries()) sum += val * count;
      return sum;
    }

    const entries = Array.from(freq.entries());
    entries.sort((a, b) => {
      if (b[1] !== a[1]) return b[1] - a[1];
      return b[0] - a[0];
    });

    let sum = 0;
    for (let i = 0; i < Math.min(x, entries.length); i++) {
      sum += entries[i][0] * entries[i][1];
    }
    return sum;
  }

  answer.push(countXSum());

  for (let i = 1; i <= nums.length - k; i++) {
    const out = nums[i - 1];
    const add = nums[i + k - 1];

    const freqOut = freq.get(out)!;
    if (freqOut === 1) freq.delete(out);
    else freq.set(out, freqOut - 1);

    freq.set(add, (freq.get(add) || 0) + 1);

    answer.push(countXSum());
  }

  return answer;
}

console.log(findXSum([1, 1, 2, 2, 3, 4, 2, 3], 6, 2));
