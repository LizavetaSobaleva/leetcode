class Solution {
  private numsMap = new Map<number, number[]>();

  constructor(nums: number[]) {
    for (let i = 0; i < nums.length; i++) {
      if (!this.numsMap.has(nums[i])) this.numsMap.set(nums[i], []);
      this.numsMap.get(nums[i])!.push(i);
    }
  }

  pick(target: number): number {
    const arr = this.numsMap.get(target)!;
    const random = Math.floor(Math.random() * arr.length);
    return arr[random];
  }
}
