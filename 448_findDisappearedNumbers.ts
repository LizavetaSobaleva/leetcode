function findDisappearedNumbers(nums: number[]): number[] {
  const allNums = new Set<number>();

  for (let i = 1; i <= nums.length; i++) {
    allNums.add(i);
  }

  for (let num of nums) {
    allNums.delete(num);
  }

  return Array.from(allNums);
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
