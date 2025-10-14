function isHappy(n: number): boolean {
  const seen = new Set<number>();

  const toArr = (num: number): number[] =>
    num
      .toString()
      .split("")
      .map((c) => +c);
  const sumSquares = (arr: number[]): number =>
    arr.reduce((a, c) => a + c ** 2, 0);

  let nums = toArr(n);
  let sum = 0;

  while (sum !== 1) {
    sum = sumSquares(nums);

    if (sum === 1) return true;
    if (seen.has(sum)) return false;

    nums = toArr(sum);
    seen.add(sum);
  }

  return true;
}

console.log(isHappy(19));
console.log(isHappy(2));
console.log(isHappy(7));
