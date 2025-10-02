function maxArea(height: number[]): number {
  if (height.length === 2) return Math.min(height[0], height[1]);

  let maxWater = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let currentWater = (right - left) * Math.min(height[left], height[right]);
    maxWater = Math.max(maxWater, currentWater);

    height[left] < height[right] ? left++ : right--;
  }

  return maxWater;
}
