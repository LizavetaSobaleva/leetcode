function allPathsSourceTarget(graph: number[][]): number[][] {
  const target = graph.length - 1;
  let paths: number[][] = [];

  function dfs(node: number, path: number[]) {
    if (node === target) {
      paths.push([...path, node]);
      return;
    }

    for (let n of graph[node]) {
      dfs(n, [...path, node]);
    }
  }

  dfs(0, []);
  return paths;
}

console.log(allPathsSourceTarget([[1, 2], [3], [3], []]));
