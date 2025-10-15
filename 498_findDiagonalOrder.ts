function findDiagonalOrder(mat: number[][]): number[] {
  const m = mat.length;
  const n = mat[0].length;
  const result: number[] = new Array(m * n);
  let index = 0;
  let row = 0;
  let col = 0;
  let direction = true;

  while (index < m * n) {
    result[index] = mat[row][col];

    if (direction) {
      if (col === n - 1) {
        row++;
        direction = false;
      } else if (row === 0) {
        col++;
        direction = false;
      } else {
        row--;
        col++;
      }
    } else {
      if (row === m - 1) {
        col++;
        direction = true;
      } else if (col === 0) {
        row++;
        direction = true;
      } else {
        row++;
        col--;
      }
    }
    index++;
  }

  return result;
}

console.log(
  findDiagonalOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
