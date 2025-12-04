function sumOddLengthSubarrays(arr: number[]): number {
  let result = 0;
  let subLength = 1;

  while (subLength <= arr.length) {
    for (let i = 0; i <= arr.length - subLength; i++) {
      const subarr = arr.slice(i, i + subLength);
      result += subarr.reduce((a, b) => a + b);
    }
    subLength += 2;
  }

  return result;
}

console.log(sumOddLengthSubarrays([10, 11, 12]));
