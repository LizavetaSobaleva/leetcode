var floodFill = function(image, sr, sc, color) {
    let oldColor = image[sr][sc]

    if (oldColor === color) return image

    const changeColor = (image, row, col) => {
        if (row < 0 || row >= image.length ||
            col < 0 || col >= image[0].length) {
            return
        }

        if (image[row][col] === oldColor) {
            image[row][col] = color
            changeColor(image, (row - 1), col)
            changeColor(image, (row + 1), col)
            changeColor(image, row, (col - 1))
            changeColor(image, row, (col + 1))
        }
    }

    changeColor(image, sr, sc)
    return image
};
console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2))