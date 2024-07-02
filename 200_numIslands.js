var numIslands = function(grid) {
    let counter = 0
	
	const findIsland = (row, col) => {
		if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) return
		if (grid[row][col] === "0") return
        grid[row][col] = "0"
		findIsland(row-1,col)
		findIsland(row+1,col)
		findIsland(row,col+1)
		findIsland(row,col-1)

    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === "1") {
                findIsland(i,j)
                counter++
            }
        }
    }
    return counter
};

const grid = [
    ["0","1","0","0","0"],
    ["0","0","0","0","1"],
    ["1","0","1","0","0"],
    ["0","0","0","1","1"]
  ]

  console.log(numIslands(grid))