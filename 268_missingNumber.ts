// function missingNumber(nums: number[]): number {
//   for (let i = 0; i <= nums.length; i++) {
//     if (!nums.includes(i)) return i;
//   }
//   return -1;
// }

function missingNumber(nums: number[]): number {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((acc, num) => acc + num, 0);
  return expectedSum - actualSum;
}
