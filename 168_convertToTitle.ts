function convertToTitle(columnNumber: number): string {
  let result = "";

  while (columnNumber > 0) {
    columnNumber--;
    const char = String.fromCharCode(65 + (columnNumber % 26));
    result = char + result;
    columnNumber = Math.floor(columnNumber / 26);
  }

  return result;
}

console.log(convertToTitle(701));
