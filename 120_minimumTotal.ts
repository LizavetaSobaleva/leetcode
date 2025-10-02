function minimumTotal(triangle: number[][]): number {
  let sum: number = triangle[0][0];
  let prevIndex: number = 0;

  for (let i = 1; i < triangle.length; i++) {
    if (triangle[i][prevIndex] < triangle[i][prevIndex + 1]) {
      sum += triangle[i][prevIndex];
    } else {
      sum += triangle[i][++prevIndex];
    }
  }

  return sum;
}

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
