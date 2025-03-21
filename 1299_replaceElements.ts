function replaceElements(arr: number[]): number[] {
  if (arr.length === 1) return [-1];

  let greatest = -1;

  for (let i = arr.length - 1; i >= 0; i--) {
    let current = arr[i];

    arr[i] = greatest;

    if (current > greatest) {
      greatest = current;
    }
  }
  return arr;
}

console.log(replaceElements([17, 18, 5, 4, 6, 1]));
