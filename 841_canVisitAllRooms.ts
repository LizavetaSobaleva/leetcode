function canVisitAllRooms(rooms: number[][]): boolean {
  const stack = [0];
  const visited = new Set<number>();

  while (stack.length) {
    const current = stack.pop();
    visited.add(current!);

    for (let key of rooms[current!]) {
      if (!visited.has(key)) {
        visited.add(key);
        stack.push(key);
      }
    }
  }

  return visited.size === rooms.length;
}

console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]));
