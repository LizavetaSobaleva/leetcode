function prefixesDivBy5(nums: number[]): boolean[] {
  const ans = [];
  let cur = 0;

  for (let bit of nums) {
    cur = (cur * 2 + bit) % 5;
    ans.push(cur === 0);
  }

  return ans;
}

console.log(prefixesDivBy5([0, 1, 1]));
