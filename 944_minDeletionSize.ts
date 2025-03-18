function minDeletionSize(strs: string[]): number {
  let result: number = 0;

  for (let j = 0; j < strs[0].length; j++) {
    for (let i = 0; i < strs.length - 1; i++) {
      if (strs[i][j] > strs[i + 1][j]) {
        result++;
        break;
      }
    }
  }

  return result;
}

console.log(minDeletionSize(["zyx","wvu","tsr"]))