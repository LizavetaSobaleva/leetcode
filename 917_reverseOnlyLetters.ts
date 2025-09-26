function reverseOnlyLetters(s: string): string {
  let left = 0;
  let right = s.length - 1;
  const arr = s.split("");

  const isLetter = (i: number): boolean => {
    const code = s.charCodeAt(i);
    return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
  };

  while (left < right) {
    if (!isLetter(left)) {
      left++;
      continue;
    }
    if (!isLetter(right)) {
      right--;
      continue;
    }
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr.join("");
}

console.log(reverseOnlyLetters("a-bC-dEf-ghIj"));
