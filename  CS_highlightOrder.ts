function highlightOrder(heights: number[]): number[] {
  const highlightOrder: number[] = [];

  while (heights.length) {
    let [minHighlight, index] = [+Infinity, -1];

    for (let i = 0; i < heights.length; i++) {
      if (
        (heights[i] > heights[i - 1] || i === 0) &&
        (heights[i] > heights[i + 1] || i === heights.length - 1)
      ) {
        if (minHighlight > heights[i]) {
          [minHighlight, index] = [heights[i], i];
        }
      }
    }
    highlightOrder.push(minHighlight);
    heights.splice(index, 1);
  }

  return highlightOrder;
}

console.log(highlightOrder([2, 7, 8, 5, 1, 6, 3, 9, 4]));
