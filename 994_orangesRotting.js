function orangesRotting(grid) {
  let minutes = 0
  let freshOranges = 0
  const queue = []

  const rotting = (row, col) => {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length)
      return
    if (grid[row][col] === 1) {
        grid[row][col] = 2;
        freshOranges--
        queue.push([row, col])
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 2) queue.push([i, j])
      if (grid[i][j] === 1) freshOranges++
    }
  }

  if (freshOranges === 0) return 0;

  while (queue.length) {
    let length = queue.length;
    for (let i = 0; i < length; i++) {
        let [row, col] = queue.shift()
        rotting(row - 1, col);
        rotting(row + 1, col);
        rotting(row, col - 1);
        rotting(row, col + 1);
    }
    if (queue.length > 0) minutes++
  }
  return freshOranges > 0 ? -1 : minutes
}

let grid = [[2,1,1],[1,1,0],[0,1,1]]

console.log(orangesRotting(grid))

// O(m * n)