function validPath(
  n: number,
  edges: number[][],
  source: number,
  destination: number
): boolean {
  if (source === destination) return true;

  const graph = new Map<number, number[]>();
  const visited = new Set<number>();
  const stack: number[] = [source];

  for (const [a, b] of edges) {
    if (!graph.has(a)) graph.set(a, []);
    if (!graph.has(b)) graph.set(b, []);
    graph.get(a)!.push(b);
    graph.get(b)!.push(a);
  }

  while (stack.length) {
    const current = stack.pop()!;
    if (current === destination) return true;
    if (visited.has(current)) continue;

    visited.add(current);
    for (const neighbor of graph.get(current) || []) {
      if (!visited.has(neighbor)) {
        stack.push(neighbor);
      }
    }
  }

  return false;
}
