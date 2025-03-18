const a: number[] = [1, 2, 4, 7];
const b: number[] = [2, 3, 6, 7];

const merge = (a: number[], b: number[]): number[] => {
  let i = 0;
  let j = 0;
  let result: number[] = [];

  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) {
      result.push(a[i]);
      i++;
    } else {
      result.push(b[j]);
      j++;
    }
  }

  while (i < a.length) {
    result.push(a[i]);
    i++;
  }

  while (j < b.length) {
    result.push(b[j]);
    j++;
  }

  return result;
};

console.log(merge(a, b));
