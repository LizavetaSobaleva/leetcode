function isPowerOfTwo(n: number): boolean {
  if (n < 1) return false;
  if (n === 1) return true;
  return n % 2 === 0 ? isPowerOfTwo(n / 2) : false;
}

console.log(isPowerOfTwo(-5));
