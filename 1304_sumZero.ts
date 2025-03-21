function sumZero(n: number): number[] {
  if (n === 1) return [0];

  let result: number[] = [];

  for (let i = 1; i <= Math.floor(n / 2); i++) {
    result.push(i, -i);
  }

  return n % 2 === 0 ? result : [...result, 0];
}

console.log(sumZero(4));
