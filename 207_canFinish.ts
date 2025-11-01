function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  if (!prerequisites.length) return true;

  const graph = new Map<number, number[]>();
  const visited = new Set<number>();
  const path = new Set<number>();

  for (let [course, dep] of prerequisites) {
    if (!graph.has(course)) graph.set(course, []);
    graph.get(course)!.push(dep);
  }

  function dfs(node: number): boolean {
    if (path.has(node)) return false;
    if (visited.has(node)) return true;

    path.add(node);

    for (let dep of graph.get(node) || []) {
      if (!dfs(dep)) return false;
    }

    path.delete(node);
    visited.add(node);
    return true;
  }

  for (let course = 0; course < numCourses; course++) {
    if (!dfs(course)) return false;
  }

  return true;
}
