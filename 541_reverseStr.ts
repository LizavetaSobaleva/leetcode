function reverseStr(s: string, k: number): string {
  if (k <= 0) return s;

  const arr: string[] = s.split("");
  const length = arr.length;

  for (let i = 0; i < length; i += 2 * k) {
    let left = i;
    let right = Math.min(i + k - 1, length - 1);

    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return arr.join("");
}

console.log(reverseStr("abcdefg", 2));
