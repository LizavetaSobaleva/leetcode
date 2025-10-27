function numberOfBeams(bank: string[]): number {
  let result: number = 0;
  const rows: number[] = [];

  for (let i = 0; i < bank.length; i++) {
    let devices = 0;

    for (let j = 0; j < bank[0].length; j++) {
      if (bank[i][j] === "1") devices++;
    }

    if (devices > 0) rows.push(devices);
  }

  for (let i = 0; i < rows.length - 1; i++) {
    result += rows[i] * rows[i + 1];
  }

  return result;
}

console.log(numberOfBeams(["011001", "000000", "010100", "001000"]));
