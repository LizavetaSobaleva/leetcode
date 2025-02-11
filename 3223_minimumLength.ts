// not suitable for very long strings
function minimumLength(s: string): number {
  if (s.length < 3) return s.length;

  let arr = s.split("");

  const findAndDeleteClosest = (index: number): boolean => {
    const char = arr[index];

    let left = index - 1;
    while (left >= 0 && arr[left] !== char) {
      left--;
    }

    let right = index + 1;
    while (right < arr.length && arr[right] !== char) {
      right++;
    }

    if (left >= 0 && right < arr.length) {
      arr.splice(right, 1);
      arr.splice(left, 1);
      return true;
    }

    return false;
  };

  let i = 0;
  while (i < arr.length) {
    if (findAndDeleteClosest(i)) {
      i = 0;
    } else {
      i++;
    }
  }

  return arr.length;
}

console.log(minimumLength("abaacbcbb")); // Output: 5
console.log(minimumLength("aa")); // Output: 2
