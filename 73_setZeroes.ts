function setZeroes(matrix: number[][]): void {
  const cols = new Set<number>();
  const rows = new Set<number>();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        cols.add(i);
        rows.add(j);
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    if (cols.has(i)) {
      for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j] = 0;
      }
    }
  }

  for (let j = 0; j < matrix[0].length; j++) {
    if (rows.has(j)) {
      for (let i = 0; i < matrix.length; i++) {
        matrix[i][j] = 0;
      }
    }
  }
}

let matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
console.log(setZeroes(matrix));
matrix;
