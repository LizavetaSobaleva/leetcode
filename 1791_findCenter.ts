function findCenter(edges: number[][]): number {
  const [e1, e2] = edges[0];

  if (edges[1].includes(e1)) return e1;
  else return e2;
}

console.log(
  findCenter([
    [1, 2],
    [2, 3],
    [4, 2],
  ])
);
