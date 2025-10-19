function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  const m = mat.length;
  const n = mat[0].length;

  if (m * n !== r * c) return mat;

  const flat = mat.flat();
  const matrix: number[][] = Array.from({ length: r }, () => new Array(c));

  let index = 0;

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      matrix[i][j] = flat[index++];
    }
  }

  return matrix;
}
