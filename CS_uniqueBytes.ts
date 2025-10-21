function uniqueBytes(segments: number[][]): number[] {
  let intervals: number[][] = [];
  const sums: number[] = [];

  for (const [start, end] of segments) {
    let newStart = start;
    let newEnd = end;
    const newIntervals: number[][] = [];

    for (const [s, e] of intervals) {
      if (newStart <= e + 1 && newEnd >= s - 1) {
        newStart = Math.min(newStart, s);
        newEnd = Math.max(newEnd, e);
      } else {
        newIntervals.push([s, e]);
      }
    }

    newIntervals.push([newStart, newEnd]);
    intervals = newIntervals.sort((a, b) => a[0] - b[0]);

    let total = 0;
    for (const [s, e] of intervals) {
      total += e - s + 1;
    }

    sums.push(total);
  }

  return sums;
}

console.log(
  uniqueBytes([
    [7, 9],
    [1, 3],
    [8, 15],
    [6, 9],
    [2, 4],
  ])
);
