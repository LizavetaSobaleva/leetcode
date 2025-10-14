class NumArray {
  private array: number[];

  constructor(nums: number[]) {
    this.array = new Array(nums.length + 1).fill(0);

    for (let i = 0; i < nums.length; i++) {
      this.array[i + 1] = this.array[i] + nums[i];
    }
  }

  sumRange(left: number, right: number): number {
    return this.array[right + 1] - this.array[left];
  }
}
