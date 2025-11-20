function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < arr2.length; i++) {
    map.set(arr2[i], i);
  }

  arr1.sort((a, b) => {
    const aIn = map.has(a);
    const bIn = map.has(b);

    if (aIn && bIn) return map.get(a)! - map.get(b)!;

    if (aIn) return -1;
    if (bIn) return 1;

    return a - b;
  });

  return arr1;
}

console.log(
  relativeSortArray(
    [12, 3, 0, 9, 13, 2, 5, 12, 2, 7, 10, 14, 13, 12, 6, 15],
    [12]
  )
);
