function convert(s: string, numRows: number): string {
  if (numRows === 1 || s.length <= numRows) return s;

  const zigzag: string[] = new Array(numRows).fill("");
  let row = 0;
  let direction = false;

  for (let i = 0; i < s.length; i++) {
    zigzag[row] += s[i];

    if (row === 0 || row === numRows - 1) direction = !direction;

    row += direction ? 1 : -1;
  }

  return zigzag.join("");
}

console.log(convert("PAYPALISHIRING", 4));
