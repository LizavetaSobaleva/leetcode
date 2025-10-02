function searchRange(nums: number[], target: number): number[] {
  let start = 0;
  let end = nums.length - 1;
  let position = -1;

  while (start <= end && position < 0) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) position = mid;
    else if (nums[mid] > target) end = mid - 1;
    else start = mid + 1;
  }
  
  if (position < 0) return [-1, -1]

  let leftStart = 0;
  let leftEnd = position;

  while (leftStart <= leftEnd) {
    let leftMid = Math.floor((leftStart + leftEnd) / 2);

    if (nums[leftMid] < target) leftStart = leftMid + 1;
    else leftEnd = leftMid - 1;
  }
  const leftIndex = leftStart

  let rightStart = position;
  let rightEnd = nums.length - 1;

  while (rightStart <= rightEnd) {
    let rightMid = Math.floor((rightStart + rightEnd) / 2);

    if (nums[rightMid] > target) rightEnd = rightMid - 1;
    else rightStart = rightMid + 1;
  }
  const rightIndex = rightEnd

  return [leftIndex, rightIndex]
}
