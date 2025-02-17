function hammingDistance(x: number, y: number): number {
  let xor = x ^ y;
  let distance = 0;

  while (xor) {
    distance += xor & 1;
    xor >>= 1;
  }

  return distance;
}

console.log(hammingDistance(1, 4));
