function heightChecker(heights: number[]): number {
  let count = 0;
  const expected = heights.toSorted((a, b) => a - b);

  if (heights === expected) return 0;

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== expected[i]) count++;
  }

  return count;
}

console.log(
  heightChecker([
    10, 6, 6, 10, 10, 9, 8, 8, 3, 3, 8, 2, 1, 5, 1, 9, 5, 2, 7, 4, 7, 7,
  ])
);
