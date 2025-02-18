function islandPerimeter(grid: number[][]): number {
  let col: number = grid.length;
  let row: number = grid[0].length;
  let perimeter: number = 0;

  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (grid[i][j] === 1) {
        if (i - 1 < 0 || grid[i - 1][j] === 0) perimeter++;
        if (j - 1 < 0 || grid[i][j - 1] === 0) perimeter++;
        if (i + 1 >= col || grid[i + 1][j] === 0) perimeter++;
        if (j + 1 >= row || grid[i][j + 1] === 0) perimeter++;
      }
    }
  }

  return perimeter;
}

console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ])
);
console.log(islandPerimeter([[1]]));
console.log(islandPerimeter([[1, 0]]));
