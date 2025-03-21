function smallerNumbersThanCurrent(nums: number[]): number[] {
  const map = new Map<number, number>();
  let result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      result.push(map.get(nums[i]));
    } else {
      let counter = nums.filter((n) => n < nums[i]).length;
      map.set(nums[i], counter);
      result.push(counter);
    }
  }
  return result;
}

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
